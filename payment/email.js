var nodemailer = require("nodemailer");
exports.sendmail = () => {

  var transporter = nodemailer.createTransport({
    service: "hotmail",
    port: 465,
    auth: {
      user: "aadilkhan05@outlook.com",
      pass: "aadilkhan@12",
    },
    tls: {
      rejectUnauthorized: false
  }
  });

  var mailOptions = {
    from: "aadilkhan05@outlook.com",
    to: "anurag.pandey17@gmail.com",
    subject: "Sending Email using Node.js",
    html: `<html>
    <head>
    <head>
    <title>Contact Us</title>
    </head>
    
    <body>
    
    <table style='position: relative; width:616px; margin: 0px auto; border: 1px solid #eee;' cellpadding='0' cellspacing='0'>
    
    
    
    
    <tr>
    <td><img src='https://controlf5.co.in/client-demo/form/img/hb-1.jpeg' alt='Wishing you a magical birthday filled with wonderful surprises' style='display: block;''></td>
    
    </tr>
    
    <tr style="background:url('https://controlf5.co.in/client-demo/form/img/hb-2.jpeg');  background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 198px;
        position: relative;">
    <td style='color: #d596b4; left: 0; right: 0; text-align: center; top: 0px; font-size: 50px; bottom: 0; text-transform: capitalize;'>  Misbah Naz </td>
    
    </td>
      
    </tr>
    
    
    <tr>
    <td><img src='https://controlf5.co.in/client-demo/form/img/hb-3.jpeg' alt='Wishing you a magical birthday filled with wonderful surprises' style='display: block;'></td>
    
    </tr>
    
    
    </table>
    
    </body>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
