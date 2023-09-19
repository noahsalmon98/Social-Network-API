const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    //email validation
    match: [
      /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
      `Please enter a valid email address`,
    ],
  },
  thought: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Thoughts',
},
friend:
    { type: mongoose.Schema.Types.ObjectId, ref: 'Friend' }



});

const User = mongoose.model("User", userSchema);

module.exports = User;