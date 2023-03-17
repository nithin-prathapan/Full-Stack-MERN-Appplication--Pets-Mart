import express from "express";
import { processPayment } from "../controllers/paymentController.js";
const router = express.Router();
router.post("/create", processPayment);
export default router;
