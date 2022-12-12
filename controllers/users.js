const { User } = require("../models/user");
const bcrypt = require("bcryptjs");


const createUser = async (req, res, next) => {
  
  const { firstName, email, password} = req.body;

  
  let passwordHash = bcrypt.hashSync(password, 12);

  
  let userData = {
    firstName,
    email,
    passwordHash,
  };

  
  let user;

  try {
    user = await User.create(userData);
  } catch (error) {
    
    res.status(422).json({
      message: "error creating user in database",
      error,
    });
  }

  
  res.status(201).json({
    id: user.id,
    message: "user created successfully",
  });
};

const updateUser = async (req, res, next) => {
  let userID = req.params.id

  let user
  try {
    user = await User.findByPk(userID)
  } catch (error) {
    res.status(404).json({
      message: "unable to find user with that id",
      error,
    })
    return
  }

  if (user === null) {
    res.status(404).json({
      message: "unable to find user with that id",
      error,
    })
    return
  }

  res.json(user)
}

module.exports = { createUser, updateUser };
