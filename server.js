const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const cors = require("cors");
const cookiesparser = require("cookie-parser");
const paypal = require('paypal-rest-sdk');
const bodyparser = require("body-parser");
const cloudinary = require("cloudinary");
const fileupload = require("express-fileupload");
const app = express();
app.use(cookiesparser());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));

app.use(fileupload());
app.use(cors(
));
app.use(bodyparser.urlencoded({ extended: true }));
connectDB();


app.use("/api/auth", require("./routes/auth"));
const PORT = process.env.PORT || 5000;
//////////////paypall/////////////////////

paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AUs4GD83qdVUKpNH1BSakU1J_vd2GlYAv6wAvOk_dNq0l9GqrrmsG55ZfoyJbPR_CRKPriEwoH4dI1or',
  'client_secret': 'EOE01sceruosL8yyjsggl2uHMTLGyj_J00ppHhTLzNP57fdFFGxZ0o65xaz_bT7-gAZTuPYIq_w3C-0G'
});
app.post('/pay', (req, res) => {
  const create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "/success",
        "cancel_url": "/cancel"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "Red Sox Hat",
                "sku": "001",
                "price": "25.00",
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": "25.00"
        },
        "description": "Hat for the best team ever"
    }]
};

paypal.payment.create(create_payment_json, function (error, payment) {
  if (error) {
      throw error;
  } else {
      for(let i = 0;i < payment.links.length;i++){
        if(payment.links[i].rel === 'approval_url'){
          res.redirect(payment.links[i].href);
        }
      }
  }
});

});

app.get('/success', (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  const execute_payment_json = {
    "payer_id": payerId,
    "transactions": [{
        "amount": {
            "currency": "USD",
            "total": "25.00"
        }
    }]
  };

  paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log(JSON.stringify(payment));
        res.send('Success');
    }
});
});

app.get('/cancel', (req, res) => res.send('Cancelled'));


//////////////paypall/////////////////////
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
process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`shutting down the server due to unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
// --------------------------errorhandle------------------------------

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
