const express = require("express");
const router = express.Router();
const bycrpt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('../db/conn');
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Hello from Router.Js")
})


//Using Promises
// //user registration complete and data store
// router.post('/register', (req, res) => {

//   //user validation by object destructuring
//   const { name, email, password } = req.body;
//   if (!name || !email || !password) {
//     return res.status(422).json({ error: "Plz filled field" });
//   }

//   //user email authentication
//   User.findOne({ email: email }).then((userExist) => {
//     if (userExist) {
//       return res.status(422).json({ error: 'Email already exist' });
//     }
//     //If key&value both are same then just type key >>> ES6
//     const user = new User({ name, email, password });

//     //data save on database
//     user.save().then(() => {
//       res.status(201).json({ mesaage: 'user registered successfuly' });
//     }).catch((err) => res.status(500).json({ error: 'Registration failed' }));
//   }).catch(err => { console.log(err); });

// });


//ASYNC AWAIT
//user registration complete and data store
router.post('/register', async (req, res) => {

  //get data using object destructuring
  const { name, email, password } = req.body;

  //user validation  
  if (!name || !email || !password) {
    return res.status(422).json({ error: "Plz filled field" });
  }

  try {
    //user email authentication
    const userExist = await User.findOne({ email: email });

    //if user already registerd then return this error 422
    if (userExist) {
      return res.status(422).json({ error: 'Email already exist' })
    } else {
      //If key & value both are same then just type key >>> ES6 method
      //validation from schema --- if user not register then create new user
      const user = new User({ name, email, password });

      //data save in collection on database
      await user.save();

      //data save successful of failed confermation
      res.status(201).json({ message: 'user registered successfuly' });
    }

  } catch (error) {
    console.log(error);
  }

});


//LOGIN
router.post('/login', async (req, res) => {
  // console.log(req.body)
  // res.json({message: 'waoooo'})


  try {
    //get data using object destructuring
    const { email, password } = req.body;
    //user form validation  
    if (!email || !password) {
      return res.status(400).json({ error: "Plz filled the data" });
    }
    //user authentication
    const userLogin = await User.findOne({ email: email });


    if (userLogin) {
      //compare user stored paswd & current pswd
      const isMatch = await bycrpt.compare(password, userLogin.password);
      //Generate Token
      const token = await userLogin.generateAuthToken();
      console.log(token);

      //Store Token in Cookie
      res.cookie('jwtoken', 'userToken');


      // res.cookie('jwtoken', token, {
      //   expires: new Date(Date.now() + 25892000000),
      //   httpOnly: true,
      // });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credentials pswd" });
      } else {
        res.json({ message: "user SignIn Successfully " });
      }

    } else {
      res.status(400).json({ error: "Invalid Credentials email" });
    }


  } catch (err) {
    console.log(err)
  };
  res.send('LOGIN PAGE');
})

module.exports = router;


