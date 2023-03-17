import express from "express";
import { getAllOrders, deleteOrder } from "../controllers/orderControllers.js";

const router = express.Router();

router.get("/", getAllOrders);
router.delete("/:id", deleteOrder);

export default router;
