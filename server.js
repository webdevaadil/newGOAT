"use strict";
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const compression = require("compression");
const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const cors = require("cors");
const cookiesparser = require("cookie-parser");
const bodyparser = require("body-parser");
const cloudinary = require("cloudinary");
const fileupload = require("express-fileupload");
const User = require("./models/User");
const app = express();
app.use(cookiesparser());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));

app.use(fileupload());
app.use(compression());
app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
connectDB();

app.use("/api/auth", require("./routes/auth"));
const PORT = process.env.PORT;

// --------------------------deployment------------------------------
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "./client/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
//   );
// } else {
  app.get("/", (req, res) => {
    const protocol = req.protocol;
    const host = req.hostname;
    const url = req.originalUrl;
    const port = process.env.PORT || 5000;
    const fullUrl = `${protocol}://${host}:${port}${url}`
  console.log(fullUrl,"hii")
    const responseString = `Full URL is: ${fullUrl}`;                       
    res.send(responseString);  
  });
// }



// ..........payment.....//
// app.post("/payment/method/attach", async (req, res) => {
//   const { paymentMethod } = req.body;

//   /* Fetch the Customer Id of current logged in user from the database */
//   const customerId = "cus_MiNnoq5bj1hjDz";

//   try {
//     const method = await attachMethod({ paymentMethod, customerId });
//     console.log(method);
//     res.status(200).json({ message: "Payment method attached succesully" });
//   } catch (err) {
//     console.log(err);
//     res.status(400).json({ message: "Could not attach method" });
//   }
// });

// /* ---------------------------------------------------------------------- */

// app.get("/payment/methods", async (req, res) => {
//   /* Query database to fetch Stripe Customer Id of current logged in user */
//   const customerId = "cus_MiNnoq5bj1hjDz";

//   try {
//     const paymentMethods = await listCustomerPayMethods(customerId);
//     res.status(200).json(paymentMethods);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json("Could not get payment methods");
//   }
// });

// /* ---------------------------------------------------------------------- */

// app.post("/payment/create", async (req, res) => {
//   const { paymentMethod } = req.body;

//   /* Query database for getting the payment amount and customer id of the current logged in user */

//   const amount = 1000;
//   const currency = "INR";
//   const userCustomerId = "cus_MiNnoq5bj1hjDz";

//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount * 100,
//       currency: currency,
//       customer: userCustomerId,
//       payment_method: paymentMethod,
//       confirmation_method: "manual", // For 3D Security
//       description: "Buy Product",
//     });

//     /* Add the payment intent record to your datbase if required */
//     res.status(200).json(paymentIntent);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json("Could not create payment");
//   }
// });

// /* ---------------------------------------------------------------------- */

// app.post("/payment/confirm", async (req, res) => {
//   const { paymentIntent, paymentMethod } = req.body;
//   try {
//     const intent = await stripe.paymentIntents.confirm(paymentIntent, {
//       payment_method: paymentMethod,
//     });

//     /* Update the status of the payment to indicate confirmation */
//     res.status(200).json(intent);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json("Could not confirm payment");
//   }
// });

// ..........payment.....//


// --------------------------deployment------------------------------
// --------------------------errorhandle------------------------------
process.on("uncaughtException", function (err) {
  console.log(err);
});
process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`shutting down the server due to unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
// --------------------------errorhandle------------------------------
app.post("/deleteuser", async (req, res) => {
  const user = await User.deleteMany();
  return res.json(user);
});
//-----------------------cloudinary---------------------

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});
//-----------------------cloudinary---------------------
const server = app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
