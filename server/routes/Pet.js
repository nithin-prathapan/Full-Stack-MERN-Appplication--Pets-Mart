import express from "express";
import {
  createPet,
  getAllpets,
  deletePet,
  getSinglePet,
  updatePet,
  addReviewAndRatings,
  search,
} from "../controllers/petController.js";
import { validateToken } from "../utils/verifyToken.js";

const router = express.Router();
router.post("/", createPet);
router.get("/", getAllpets);
router.put("/review/:id", addReviewAndRatings);
router.get("/:id", getSinglePet);
router.delete("/:id", deletePet);
router.put("/:id", updatePet);
router.post("/rec", search);

export default router;
