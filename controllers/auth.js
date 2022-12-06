const { User } = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const signin = async (req, res, next) => {

  const { email, password } = req.body;

  let user;

  try {
    user = await User.findOne({
      where: {
        email: email,
      },
    });
  } catch (error) {

    res.status(404).json({
      message: "unable to find user with matching email and password",
      error,
    });
    return;
  }

  let match = bcrypt.compareSync(password, user.passwordHash);
  if (!match) {
 
    res.status(401).json({
      message: "unable to find user with matching email and password",
    });
    return;
  }


  let token = jwt.sign(
    {
      uid: user.id,
      name: user.firstName,
      admin: false,
    },
    "secret", 
    {
      expiresIn: "1h",
      issuer: "org.edfarm.gaming-api",
    }
  );

  return res.json({ token });
};

module.exports = { signin };
