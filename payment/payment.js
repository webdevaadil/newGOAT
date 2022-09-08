const fetch = require('node-fetch');
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const catchAsyncerror = require("../middleware/catchAsyncerror");

const { CLIENT_ID, APP_SECRET } = process.env;
const base = "https://api-m.sandbox.paypal.com";



// // import  fetch from "node-fetch";
// exports.createOrder=  catchAsyncerror(async (req, res, next) => {
//   const accessToken = await this.generateAccessToken();
//   const url = `${base}/v2/checkout/orders`;
//   const response = 

//   await fetch(url, {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${accessToken}`,
//     },
//     body: JSON.stringify({
//       intent: "CAPTURE",
//       purchase_units: [
//         {
//           amount: {
//             currency_code: "USD",
//             value: "100.00",
//           },
//         },
//       ],
//     }),
//   });

//   return this.handleResponse(response);
// });

// exports.capturePayment=  catchAsyncerror(async (orderId) => {
    
//   const accessToken = await this.generateAccessToken();
//   const url = `${base}/v2/checkout/orders/${orderId}/capture`;
//   const response = await fetch(url, {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });

//   return this.handleResponse(response);
// });

// exports.generateAccessToken=catchAsyncerror(async () => {
// console.log(CLIENT_ID);
    
//   const auth = Buffer.from(CLIENT_ID + ":" + APP_SECRET).toString("base64");
//   const response = await fetch(`${base}/v1/oauth2/token`, {
//     method: "post",
//     body: "grant_type=client_credentials",
//     headers: {
//       Authorization: `Basic ${auth}`,
//     },
//   });

//   const jsonData = await this.handleResponse(response);
//   console.log(jsonData);
//   // return jsonData.access_token;
// });
// exports.handleResponse=  catchAsyncerror(async (response) => {

    
//   if (response.status === 200 || response.status === 201) {
//     return response.json();
//   }

//   const errorMessage = await response.text();
//   throw new Error(errorMessage);
// });
