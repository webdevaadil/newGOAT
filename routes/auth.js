const express = require("express");
const router = express.Router();

const{ register, login,dashboard, isAuthuser, logout, updatePassword, updateProfile, profilepic,order,captureorder }= require('../controllers/auth');
// const { test } = require("../payment/payment");
router.route("/register").post(register);

router.route("/login").post(login)
// router.route("/test").get(test)

router.route("/me").get(isAuthuser,dashboard);
router.route("/logout").get(logout);
router.route("/update/password").put(isAuthuser, updatePassword);
router.route("/update/profilepic").put(isAuthuser, profilepic);
router.route("/update/profile").put(isAuthuser, updateProfile);
router.route("/order").post(order);
router.route("/order/:orderID/capture").post(captureorder);


module.exports=router