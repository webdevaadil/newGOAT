const express = require("express");
const router = express.Router();

const{ register, login,dashboard, isAuthuser, logout, updatePassword, updateProfile }= require('../controllers/auth');
const { test } = require("../payment/payment");
router.route("/register").post(register,test);

router.route("/login").post(login)
// router.route("/test").get(test)

router.route("/me").get(isAuthuser,dashboard);
router.route("/logout").get(logout);
router.route("/update/password").put(isAuthuser, updatePassword);
router.route("/update/profile").put(isAuthuser, updateProfile);



module.exports=router