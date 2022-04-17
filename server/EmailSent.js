const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: 'mansoor21st@gmail.com',
    pass: 'm@n70or9',
  }
});

//Credentials
const mailOptions = {
  from: 'mansoor21st@gmail.com',
  to: 'mansoor21st@gmail.com',
  subject: "Email Sent through Node Js",
  text: "Hello from nodeMailer",
}
//Error & Success
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  }
  else {
    console.log('email has been sent', info.response);
  }
});