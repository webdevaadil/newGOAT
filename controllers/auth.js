const User = require("../models/User");
const fetch = require("node-fetch");
const base = "https://api-m.sandbox.paypal.com";
const ErrorResponse = require("../utlis/errorresponse.js");
const catchAsyncerror = require("../middleware/catchAsyncerror");
const jwt = require("jsonwebtoken");
var cloudinary = require("cloudinary").v2;
const emailValidator = require("deep-email-validator");
const { expressjwt } = require("express-jwt");
const bcrypt = require("bcrypt");
const { findByIdAndUpdate } = require("../models/User");
const { CLIENT_ID, APP_SECRET } = process.env;
var chargebee = require("chargebee");
chargebee.configure({
  site: "thegoatstips",
  api_key: "live_fUgOvzGowuWIbcOiyr3uEncdrUAPVaZYM"
})
async function generateAccessToken() {
  const auth = Buffer.from(CLIENT_ID + ":" + APP_SECRET).toString("base64");
  const response = await fetch(`${base}/v1/oauth2/token`, {
    method: "post",
    body: "grant_type=client_credentials",
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });
  const data = await response.json();
  return data.access_token;
}
async function isEmailValid(email) {
  return emailValidator.validate(email);
}
// exports.oldregister = catchAsyncerror(async (req, res, next) => {
//   console.log(req.body);
//   let now = parseInt(new Date().toISOString().slice(0, 10).replace(/-/g, ""));
//   let year = new Date(req.body.dob).getUTCFullYear();
//   let month = new Date(req.body.dob).getUTCMonth();
//   let day = new Date(req.body.dob).getUTCDate();
//   let birthDate = year * 10000 + month * 100 + day * 1;

//   const { username, email, password, dob, packages, phoneno } = req.body;

//   if (now - birthDate < 180000) {
//     return res.status(400).json("Only 18+ Person Can Register Here");
//   }
//   if (!username || !email || !password || !dob || !packages || !phoneno) {
//     return res.status(400).json("plese fill all input ");
//   }
//   if (packages === "free") {
//     paymentstatus = "true";
//   }
//   if (password.length < 8) {
//     return res.status(400).json("password must be 8 character long");
//   }
//   try {
//     User.findOne({ email }, async (err, user) => {
//       const { valid, reason, validators } = await isEmailValid(email);
//       // console.log(validators);
//       if (!valid) {
//         return res
//           .status(500)
//           .json("email is invalid please enter a valid email");
//       } else if (user) {
//         return res.status(500).json("user already registered");
//       } else {

//         const user = await User.create({
//           username,
//           email,
//           password,
//           dob,
//           packages,
//           paymentstatus: req.body.paymentstatus || "false",
//           phoneno,

//         });
//         // const order = await createOrder();
//         // console.log(order.id,'hfghdf')
//         // sendToken(user, 201, res);
//         return res.status(201).json(user);
//       }
//     });
//   } catch (error) {
//     // console.log(error.message);
//   }
// });

exports.register = catchAsyncerror(async (req, res, next) => {
  console.log(req.body);
  let now = parseInt(new Date().toISOString().slice(0, 10).replace(/-/g, ""));
  let year = new Date(req.body.dob).getUTCFullYear();
  let month = new Date(req.body.dob).getUTCMonth();
  let day = new Date(req.body.dob).getUTCDate();
  let birthDate = year * 10000 + month * 100 + day * 1;
  const { email, packages, PaymentexpireDate, paymentDate } = req.body;

  // if (now - birthDate < 180000) {
  //   return res.status(400).json("Only 18+ Person Can Register Here");
  // }
  // if (!username || !email || !password || !dob || !packages || !phoneno) {
  //   return res.status(400).json("plese fill all input ");
  // }
  if (packages === "free") {
    paymentstatus = "true";
  }

  try {
    User.findOne({ email }, async (err, user) => {
      const { valid, reason, validators } = await isEmailValid(email);
      // console.log(validators);
      console.log(user);
      if (!valid) {
        return res
          .status(500)
          .json("email is invalid please enter a valid email");
      } else if (user) {
        console.log(user._id);
        await User.findByIdAndUpdate(user._id, {
          packages: req.body.packages,
          paymentDate: req.body.paymentDate,
          PaymentexpireDate: req.body.PaymentexpireDate,
        });
      } else {
        const user = await User.create({
          email,
          PaymentexpireDate,
          paymentDate,
          packages,
          paymentstatus: req.body.paymentstatus || "false",
        });
        return res.status(201).json(user);
      }
      return;
    });
  } catch (error) {
    console.log(error.message);
  }
});

exports.updatesignup = catchAsyncerror(async (req, res, next) => {
  console.log(req.body);
  let now = parseInt(new Date().toISOString().slice(0, 10).replace(/-/g, ""));
  let year = new Date(req.body.dob).getUTCFullYear();
  let month = new Date(req.body.dob).getUTCMonth();
  let day = new Date(req.body.dob).getUTCDate();
  let birthDate = year * 10000 + month * 100 + day * 1;
  const { email, packages } = req.body;

  // if (now - birthDate < 180000) {
  //   return res.status(400).json("Only 18+ Person Can Register Here");
  // }
  // if (!username || !email || !password || !dob || !packages || !phoneno) {
  //   return res.status(400).json("plese fill all input ");
  // }
  if (packages === "free") {
    paymentstatus = "true";
  }
  // if (password.length < 8) {
  //   return res.status(400).json("password must be 8 character long");
  // }
  try {
    User.findOne({ email }, async (err, user) => {
      const { valid, reason, validators } = await isEmailValid(email);
      // console.log(validators);
      if (user) {
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt);
        console.log(password);
        const users = await User.findByIdAndUpdate(user._id, {
          username: req.body.username,
          password: password,
          dob: req.body.dob,
          phoneno: req.body.phoneno,
        });

        sendToken(users, 200, res);
        // return res.status(500).json("user already registered");
      } else {
        // let customer_id = await Stripe.CreateCustomer(
        //   email,
        //   // username,
        //   // "1184 sector-B indore"
        // );
        // console.log(customer_id);
        // const user = await User.create({
        //   // username:null,
        //   email,
        //   // password:null,
        //   // dob:null,
        //   packages,
        //   paymentstatus: req.body.paymentstatus || "false",
        //   // phoneno:null,
        //   customer_id,
        // });
        return res.status(500).json("Please Pay First Then Signup");
      }
      return;
    });
  } catch (error) {
    console.log(error.message);
  }
});

exports.checkData = catchAsyncerror(async (req, res, next) => {
  return res.send("success");
})

exports.order = catchAsyncerror(async (req, res, next) => {
  // const order = await createOrder();
  console.log(order.id);
  res.json(order);
});

exports.captureorder = catchAsyncerror(async (req, res, next) => {
  const { orderID } = req.params;
  const captureData = await capturePayment(orderID);
  // TODO: store payment information such as the transaction ID
  res.json(captureData);
});
async function capturePayment(orderId) {
  const accessToken = await generateAccessToken();
  const url = `${base}/v2/checkout/orders/${orderId}/capture`;
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await response.json();
  return data;
}

// generate an access token using client id and app secret
async function generateAccessToken() {
  const auth = Buffer.from(CLIENT_ID + ":" + APP_SECRET).toString("base64");
  const response = await fetch(`${base}/v1/oauth2/token`, {
    method: "post",
    body: "grant_type=client_credentials",
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });
  const data = await response.json();
  return data.access_token;
}

exports.login = catchAsyncerror(async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json("plese fill all input ");
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(500).json("invalid credentials user not found");
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(500).json("password is not valid please register");
    }
    // res.status(201).json(user)

    sendToken(user, 200, res);
  } catch (error) {
    throw new Error(error);

    // res.status(500).json({ success: false });
  }
});
exports.isAuthuser = catchAsyncerror(async (req, res, next) => {
  const { token } = req.cookies;
  // console.log(token);
  if (!token) {
    return res
      .status(401)
      .json({ message: "plese login to access this resource" });
  } else {
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodedData.id);
    next();
  }
});
exports.dashboard = catchAsyncerror(async (req, res, next) => {
  if (!req.user) {
    return res
      .status(401)
      .json({ message: "plese login to access this resource" });
  }

  const user = await User.findById(req.user.id);

  //  let bankdata =  await Stripe.GetCardList(user.customer_id);
  //  console.log(bankdata);

  res.status(200).json({
    sucess: true,
    user,
  });
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
exports.requireSignin = catchAsyncerror(async (req, res, next) => {
  expressjwt({
    secret: config.jwtSecret,
    userProperty: "auth",
  });
});
// update User password
exports.updatePassword = catchAsyncerror(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");
  // console.log(req.body);

  if (req.body.newPassword.length < 8) {
    return res
      .status(400)
      .json({ message: "password must be 8 character long" });
  }
  if (req.body.confirmPassword.length < 8) {
    return res
      .status(400)
      .json({ message: "password must be 8 character long" });
  }
  if (!isPasswordMatched) {
    return res.status(400).json({ message: "Old password is incorrect" });
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return res.status(400).json({ message: "password does not match" });
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
    packages: req.body.packages,
    paymentstatus: req.body.paymentstatus,
    paymentDate: req.body.paymentDate,
    PaymentexpireDate: req.body.PaymentexpireDate,
    phoneno: req.body.phoneno,
    residientialaddress: req.body.residientialaddress,
  };
  // console.log(req.body);

  await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
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

exports.test = catchAsyncerror((req, res, next) => {
  chargebee.hosted_page.checkout_new_for_items({
    subscription_items: [
      {
        item_price_id: 'GOLD-AUD-Weekly'
      }]
  }).request(function (error, result) {
    if (error) {
      //handle error
      console.log(error);
      res.send(error);
    } else {
      console.log(result);
      var hosted_page = result.hosted_page;
      res.send(result.hosted_page);
      // return res
      //     .status(200)
      //     .json({ result });
    }
  });
})

