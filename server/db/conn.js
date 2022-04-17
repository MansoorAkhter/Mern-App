const mongoose = require('mongoose');

//connecting mongodb atlas through config.env
const db = process.env.DATABASE;

//Connect application with database through mongoose
//this is using promises


mongoose.connect(db).then(() => {
  console.log("connection succesful");
}).catch((err) => {
   console.log("connection failed"); 
  console.log(err)
  });