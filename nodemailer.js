const nodemailer = require("nodemailer");
const User = require("./models/User");
const sequelize = require("./config/config");

require("dotenv").config();

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

const mailingList = User.findAll({
  attributes: ["email"],
});

let mailOptions = {
  from: "triangle.twitchers@gmail.com",
  to: mailingList,
  subject: "Nodemailer Project",
  text: "Hi from your nodemailer project",
};

transporter.sendMail(mailOptions, function (err, data) {
  if (err) {
    console.log("Error " + err);
  } else {
    console.log("Email sent successfully");
  }
});
