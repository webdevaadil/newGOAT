'use strict'
const dotenv = require("dotenv"); 
dotenv.config({ path: "./config.env" });
const compression = require('compression');
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
app.use(cors(
));
app.use(bodyparser.urlencoded({ extended: true }));
connectDB();


app.use("/api/auth", require("./routes/auth"));
const PORT = process.env.PORT;

// --------------------------deployment------------------------------
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
("hi");

// --------------------------deployment------------------------------
// --------------------------errorhandle------------------------------
process.on('uncaughtException', function (err) {
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
app.post("/deleteuser",async(req,res)=>{
  const user = await User.deleteMany()
  return res.json(user)
})
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
