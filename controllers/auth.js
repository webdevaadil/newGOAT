const User = require("../models/User");
const ErrorResponse = require("../utlis/errorresponse.js");
const catchAsyncerror = require("../middleware/catchAsyncerror");
const jwt = require("jsonwebtoken");
var cloudinary = require("cloudinary").v2;
const emailValidator = require("deep-email-validator");

async function isEmailValid(email) {
  return emailValidator.validate(email);
}
exports.register = catchAsyncerror(async (req, res, next) => {
  const { username, email, password, dob, gender } = req.body;

  if (password.length < 6) {
    return res.status(400).json("password must be 6 character long");
  }

  try {
    User.findOne({ email }, async (err, user) => {
      const { valid, reason, validators } = await isEmailValid(email);
      console.log(validators);

      if (!valid) {
        return res
          .status(500)
          .json("email is invalid please enter a valid email");
      } else if (user) {
        return res.status(500).json("user already registered");
      } else {
        const myCloud = await cloudinary.uploader.upload(
          "https://res.cloudinary.com/degu3b9yz/image/upload/v1659352924/avatars/blilsisofr6pbhnuxbte.png",
          {
            folder: "avatars",
            width: 150,
            crop: "scale",
          }
        );
        const user = await User.create({
          username,
          email,
          password,
          dob,
          gender,
          avatar: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          },
        });

        sendToken(user, 201, res);
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

exports.login = catchAsyncerror(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new ErrorResponse("please provide email&password", 400));
  }

  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(500).json("invalid credentials user not found");
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(500).json("password is not vallid please register");
    }
    // res.status(201).json(user)

    sendToken(user, 200, res);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

exports.isAuthuser = catchAsyncerror(async (req, res, next) => {
  const { token } = req.cookies;
  console.log(token);
  if (!token) {
    return next(new ErrorResponse("plese login to access this resource", 401));
  }
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decodedData.id);
  next();
});
exports.dashboard = catchAsyncerror(async (req, res, next) => {
  if (req.session) {
    console.log(req.session.email);
  }
  const user = await User.findById(req.user.id);
  // const productCount = await Product.countDocuments()
  // if (!products) {
  //   return next(new ErrorResponse("product not found", 404));
  // }
  res.status(200).json({
    sucess: true,
    user,

    // productCount,
  });
  console.log(user);
  // console.log({token});
});
exports.logout = catchAsyncerror(async (req, res, next) => {
  await res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});
// update User password
exports.updatePassword = catchAsyncerror(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");
  console.log(req.body);
  const isPasswordMatched = await user.matchPassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return res.status(400).json("Old password is incorrect");
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return res.status(400).json("password does not match");
  }

  user.password = req.body.newPassword;

  await user.save();

  sendToken(user, 200, res);
});
// update User Profile
exports.updateProfile = catchAsyncerror(async (req, res, next) => {
  const newUserData = {
    username: req.body.username,
    dob: req.body.dob,
    gender: req.body.gender,
  };
  if (req.body.avatar!='') {
    const user = await User.findById(req.user.id);
    console.log("hi");
    const imageId = user.avatar.public_id;

    cloudinary.uploader.destroy(imageId);

    const myCloud = await cloudinary.uploader.upload(req.body.avatar, {
      folder: "horse",
      // width: 150,
      crop: "scale",
    });

    newUserData.avatar = {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    };
  }
  await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: "updated",
  });
});

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  // option for cookie
  const options = {
    expire: new Date(Date.now + 24 * 60 * 60 * 1000),
    httpOnly: true,
  };
  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};
