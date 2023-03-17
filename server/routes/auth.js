import express from "express";
import {
  deleteUser,
  getAllUsers,
  login,
  register,
} from "../controllers/authController.js";
import { validateToken } from "../utils/verifyToken.js";
const router = express.Router();
router.post("/signup", register);
router.post("/login", login);
router.get("/users", getAllUsers);
router.delete("/users/:id", deleteUser);
export default router;
