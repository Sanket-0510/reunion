const User = require("../models/user");


//handler function for the signup
const handleSignup = async (req, res) => {
  const { name, email, number, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({ mssg: "User with that email already registered" });
    }

    const newUser = new User({
      name: name,
      email: email,
      number: number,
      password: password,
    });

    const result = await newUser.save();

    res.json({ message: "Document saved successfully", result });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ message: "Error occurred while saving the document" });
  }
};

//handler function for login
const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const token =await User.matchPassword(email, password);
   
    res.json({ token:token });
  } catch (e) {
    console.log(e);
    res.status(500).json({ mssg: "erro occured while signing in" });
  }
};


module.exports = { handleSignup, handleLogin };
