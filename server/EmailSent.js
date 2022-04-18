const nodemailer = require('nodemailer');
const emailpss = process.env.EMAILPSS;
const host = process.env.HOST;
const emailPort = process.env.EMAIL_PORT;


const transporter = nodemailer.createTransport({
  host: host,
  port: emailPort,
  secure: false,
  requireTLS: true,
  auth: {
    user: 'mansoor21st@gmail.com',
    pass: emailpss,
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