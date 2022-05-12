const User = require("../Models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
/*
const register = async (req, res) => {
    //console.log(req.body);
  try {
    const { cin,firstName, lastName, email, password, role } = req.body;
    
    const existuser = await User.findOne({ email: email });
    if (existuser)
      res
        .status(400)
        .json({ message: "you have an account already registered" });
    const cryptPassword = await bcrypt.hash(password, 12);

    const newuser = new User({ cin,firstName, email, password:cryptPassword, role  });
    const user = await newuser.save();
    console.log(user);

    const token = jwt.sign({ email, id: user._id }, "GMC2022", {
      expiresIn: "2h",
    });
    console.log("hello");
    res.status(200).json({ user, token });
  } catch {

    res.status(500).json({ message: "somthing went wrong" });
  }
};
module.exports = { register };
*/
module.exports.register = async (req, res) => {
  console.log(req.body);
  const { cin, lastName, firstName, email, password, role } = req.body;

  try {
    const user = await User.create({
      cin,
      lastName,
      firstName,
      email,
      password,
      role,
    });
    res.status(201).json({ user: user._id });
  } catch (err) {
    console.log(err);
  }
};
