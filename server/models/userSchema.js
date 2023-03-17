import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  picturePath: {
    type: String,
    // required: true,
    default: "pic2.jpg",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User = new mongoose.model("User", userSchema);
export default User;
