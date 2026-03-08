const User = require("../models/userModel");

const signupController = async (req, res)=>{
  try {

    const {user_name, email, password} = req.body;
    const user = new User({
      user_name,
      email,
      password
    });

    await user.save();

    res.status(201).json({
      user_name,
      success:true,
      message:"user sign up successfully"
    });

  } catch (error) {

    // Duplicate email error
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Email already exists"
      });
    }

    res.status(500).json({
      success:false,
      message:error.message
    })
  }

}

module.exports = signupController;