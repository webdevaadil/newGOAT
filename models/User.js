
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const validator = require('validator')
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "please provide username"],
  },
  email: {
    type: String,
    required: [true, "please provide email"],
    unique: true,
    validate:[validator.isEmail,"Please Enter a  valid Email"]

  },
  password: {
    type: String,
    required: [true, "please provide password"],
    minlength: 6,
    select: false,
  },
  dob: {
    type: Date,
    required: [true, "please provide date of birth"],
  },
  Name_of_card: {
    type: String,
    required: [true, "please provide Name_of_card"],
  },

  card_no: {
    type: Number,
    required: [true, "please provide card_no"],
  },
  packages: {
    type: String,
    required: [true, "please provide packages"],
  },

  Expiry: {
    type: Date,
    required: [true, "please provide Expiry"],
  },
  cvc: {
    type: Number,
    required: [true, "please provide cvc"],
  },
  gender: {
    type: String,
    default: "male",
  },

  avatar:{
        
    public_id:{
        type:String,
        required:true

    },
   url :{
        type:String,
        required:true

    },
    
},

    
    

  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.matchPassword = async function (enteredpassword) {
  return await bcrypt.compare(enteredpassword, this.password);
};
userSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};
userSchema.methods.getresetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpire = Date.now() + 24 * 60 * 60 * 100;
  return resetToken;
};
const user = mongoose.model("userLOgin", userSchema);
module.exports = user;
