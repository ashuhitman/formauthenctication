const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  username: {
    type: String,
  },
  gender: {
    type: String,
  },
  country: {
    type: String,
  },
  submission: {
    type: Boolean,
    default: 1,
  },
  dtime: {
    type: Date,
    default: new Date().toDateString(),
  },
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
