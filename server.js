const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const cors = require("cors");
const cookiesparser = require("cookie-parser");
const bodyparser = require("body-parser");
const cloudinary = require("cloudinary");
const fileupload= require("express-fileupload")
connectDB();
const app = express();
app.use(cookiesparser());
app.use(express.json());
app.use(fileupload());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use("/api/auth", require("./routes/auth"));
const PORT = process.env.PORT || 5000;

process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`shutting down the error due to uncaught exception`);
  process.exit(1);
});
process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`shutting down the server due to unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
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

//-----------------------cloudinary---------------------

//-----------------------cloudinary---------------------
const server = app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
process.on("unhandledRejection", (err, promise) => {
  console.log(` logged error${err}`);
  server.close(() => process.exit(1));
});
process.on("beforeExit", (code) => {
  // Can make asynchronous calls
  setTimeout(() => {
    console.log(`Process will exit with code: ${code}`);
    process.exit(code);
  }, 100);
});

process.on("exit", (code) => {
  // Only synchronous calls
  console.log(`Process exited with code: ${code}`);
});
