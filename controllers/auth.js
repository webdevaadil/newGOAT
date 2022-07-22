const User = require("../models/User");
const crypto = require("crypto");
const ErrorResponse = require("../utlis/errorresponse.js");
const sendEmail = require("../utlis/sendEmail.js");
const user = require("../models/User");
const emailValidator = require("deep-email-validator");
const { setTimeout } = require("timers");

async function isEmailValid(email) {
    return emailValidator.validate(email)
  }
exports.register = async (req, res, next) => {
   
  const { username, email, password,dob,gender } = req.body;
  if(password.length<6){
      return res.status(400).json("password must be 6 character long")


  }

  try {
    User.findOne({ email}, async (err, user) => {
      
      const {valid, reason, validators} = await isEmailValid(email);
      console.log(validators)

      if(!valid){
 return res.status(500).json("email is invalid please enter a valid email")
        
      }else if(user){
        return res.status(500).json("user already registered")
      }
       else {
        const user = await User.create({
          username,
          email,
          password,
          dob,
          gender,
        });

        sendToken(user, 201, res);
      }

     
    });
  }catch (err) {
    res.status(500).json({ success: false, error: error.message });
  }
};


exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorResponse("please provide email&password", 400));
  }
 
  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
return res.status(500).json("invalid credentials user not found")
    }
    const isMatch = await user.matchPasswords(password);
    if (!isMatch) {
   return res.status(500).json("password is not vallid please register")
 
    }
        // res.status(201).json(user)

    sendToken(user, 200, res);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message});
  }
};


const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ success: true, token,user});
};

