const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

// Configure the email transporter using your SMTP credentials
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "oyedelee22@gmail.com",
    pass: "jkul gxch ozqy xjml",
  },
});

// Create and deploy the function
exports.sendEmail = functions.https.onCall((data)=>{
  const mailOptions = {
    from: "oyedelee22@gmail.com",
    to: data.email,
    subject: data.subject,
    text: data.message,
  };
  return transporter.sendMail(mailOptions)
      .then(() => {
        return {success: true};
      })
      .catch((error) => {
        throw new functions.https.HttpsError("internal", error.message);
      });
});
