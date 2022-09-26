const express = require("express");
const router = express.Router();

const {
  register,
  login,
  dashboard,
  isAuthuser,
  logout,
  updatePassword,
  updateProfile,
  profilepic,
  ordercapture,
  orde,
  registerrtest,
  pay,
  paym,
} = require("../controllers/auth");
router.route("/register").post(register);
router.route("/pay").post(pay);

router.route("/login").post(login);
// router.route("/test").get(test)

router.route("/me").get(isAuthuser, dashboard);
router.route("/order/:orderID/capture").post(ordercapture);
// router.route("/order").post(ordertest);
router.route("/logout").get(logout);
router.route("/update/password").put(isAuthuser, updatePassword);
router.route("/update/profilepic").put(isAuthuser, profilepic);
router.route("/update/profile").put(isAuthuser, updateProfile);

module.exports = router;
