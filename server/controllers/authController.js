import User from "../models/userSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createToken } from "../utils/verifyToken.js";

//REGISTER FUNCTION
export const register = async (req, res) => {
  const { email, password, name } = req.body;
  if (!name || !password || !email) {
    res.status(400).json({ error: "Invalid user credentials" });
  } else {
    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(400).json({ error: "User already exists" });
    } else {
      //generate hashed password
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);
      //create user
      const user = await User.create({
        name,
        email,
        password: hashPassword,
      });
      if (user) {
        const accessToken = await createToken(user._id);
        res.cookie("access-token", accessToken);
        res.status(201).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          token: accessToken,
        });
      } else {
        res.status(404).json({ error: "Invalid user credentials" });
      }
    }
  }
};

//LOGIN FUNCTION
export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res
      .status(404)
      .json({ success: false, error: "Please fill the fields properly" });
  } else {
    const userExist = await User.findOne({ email });
    if (!userExist) {
      res
        .status(404)
        .json({ success: false, error: "Can't find user with this email" });
    } else {
      await bcrypt.compare(password, userExist.password).then(async (match) => {
        if (!match) {
          res
            .status(404)
            .json({ success: false, error: "Password does not match" });
        } else {
          const accessToken = await createToken(userExist._id);
          res.cookie("access-token", accessToken);
          res.status(200).json({
            success: true,
            message: "Loggin success",
            _id: userExist._id,
            admin: userExist.isAdmin,
            name: userExist.name,
            email: userExist.email,
            token: accessToken,
            error: false,
          });
        }
      });
    }
  }
};

//GET ALL USERS LIST

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
    return users;
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

//DELETE USER

export const deleteUser = async (req, res) => {
  try {
    const result = await User.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
