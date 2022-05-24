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

const sendEmail = async () => {
  try {
    const users = await User.findAll({
      attributes: ["email"],
    });

    const mailingList = users
      .map((user) => user.get({ plain: true }))
      .map((user) => user.email);

    console.log(mailingList);

    let mailOptions = {
      from: "triangle.twitchers@gmail.com",
      to: [...mailingList, "ocskier@gmail.com"],
      subject: "Update from Triangle Twitchers!",
      text: "Hello, fellow birdwatcher! It's officially summer here in North Carolina, which means the start of all sorts of exciting bird activity. The sight of ruby-throated hummingbirds descending on feeders and flowers alike never fails to delight. We have plenty of exciting events planned in the coming months, so check out our events page and stay in touch! If you're a new member, we'd love to hear about your birding experiences on our blog page. Thanks for being a member of the Triangle Twitcher community! Happy birding, --The Triangle Twitcher Team",
      html: "<h3>Hello, fellow birdwatcher!</h3> <p>It's officially summer here in North Carolina, which means the start of all sorts of exciting bird activity. The sight of ruby-throated hummingbirds descending on feeders and flowers alike never fails to delight. We have plenty of exciting events planned in the coming months, so check out our events page and stay in touch! If you're a new member, we'd love to hear about your birding experiences on our blog page. Thanks for being a member of the Triangle Twitcher community! </p> <br/><p>Happy birding,</p> <br/> <p>--The Triangle Twitcher Team</p>",
    };

    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Email sent successfully");
      }
    });
  } catch (err) {}
};

sendEmail();
