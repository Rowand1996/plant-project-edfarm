const { User } = require("../models/user");
const bcrypt = require("bcryptjs");


const createUser = async (req, res, next) => {
  
  const { email, password, firstName } = req.body;

  
  let passwordHash = bcrypt.hashSync(password, 12);

  
  let userData = {
    passwordHash,
    email,
    firstName,
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

module.exports = { createUser };
