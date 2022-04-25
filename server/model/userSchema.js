const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

//create schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      }
    }
  ]
})


//Hashing the password by bcrypt
userSchema.pre('save', async function (next) {
  console.log('bcrypt');

  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  next();
});


//Generate Token
userSchema.methods.generateAuthToken = async function () {
  try {
    let userToken = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: userToken });

    await this.save();
    return userToken;

  } catch (error) {
    console.log(error)
  }
}

//create model
const User = mongoose.model('USER', userSchema);

module.exports = User;