const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "Username already Exists"],
    required: [true, " Username is required"],
  },
  email: {
    type: String,
    unique: [true, "Username already Exists"],
    required: [true, " Username is required"],
  },
  password: {
    type: String,
    required: [true, " Username is required"],
  },
  bio: {
    type: String,
  },
  profileImage:{
    type:String,
    default:"https://ik.imagekit.io/leyakier/default%20image.webp"
  }
});

const userModel = mongoose.model("users", userSchema)

module.exports = userModel