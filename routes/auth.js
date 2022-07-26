const express = require("express");
const router = express.Router();

const{ register, login,dashboard, isAuthuser, logout, updatePassword }= require('../controllers/auth');
router.route("/register").post(register);

router.route("/login").post(login);

router.route("/me").get(isAuthuser,dashboard);
router.route("/logout").get(logout);
router.route("/password/update").get(isAuthuser, updatePassword);

// router.route("/resetpassword/:resetToken").put(resetPassword);

// router.route("/dashboard").post(isAuthuser,dashboard)


module.exports=router