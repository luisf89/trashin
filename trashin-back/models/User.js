const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
    },
    name: {
      type: String,
      required: true
    },
    lastName:{
      type: String,
      required: true
    },
    photo: {
      type: String,
      default: "https://res.cloudinary.com/dhgfid3ej/image/upload/v1558806718/profileapp/asdsadsa_tuo0fx.jpg"
    },
    email: {
      required: true,
      unique: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);