const dotenv = require("dotenv");
const express = require("express");
const app = express();

//env file import
dotenv.config({ path: "./config.env" });

//require  database from config.env
require('./db/conn');

app.use(express.json());

//Link Router File
app.use(require('./router/auth'));

//port using from config.env
const port = process.env.PORT;


//MiddleWare
const middleware = (req, res, next) => {
  console.log("Hello from middleware");
  next();
}


app.get("/contact", (req, res) => {
  
//Store Token as Cookie on browser
  res.cookie('Mansoor', 'tokenCookie');
  res.send("Hello from Contact");
});


app.get("/about", middleware, (req, res) => {
  console.log("Hello from About");

  res.send("About")
})

app.listen(port)