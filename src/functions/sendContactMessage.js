//jkul gxch ozqy xjml
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// Configure the email transport using the default SMTP transport and a GMail account.
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'oyedelee22@gmail.com',
    pass: 'jkul gxch ozqy xjml'
  }
});

// Create a Cloud Function to send an email
exports.sendEmail = functions.https.onCall((data, context) => {
  const mailOptions = {
    from: 'cjwalt oyedelee22@gmail.com',
    to: data.email,
    subject: data.subject,
    text: data.message
  };

  return transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return { success: false, error: error.toString() };
    }
    return { success: true };
  });
});
