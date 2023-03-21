import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import petRoute from "./routes/Pet.js";
import paymentRoutes from "./routes/payment.js";
import orderRoutes from "./routes/Order.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
uuidv4();
dotenv.config();
const app = express();
app.use(express.static(path.join(__dirname, "public")));
//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/avif",
    "image/webp",
  ];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
export const upload = multer({ storage: storage, fileFilter });
app.use("/auth", authRoute);
app.use("/pet", upload.single("image"), petRoute);
app.use("/order", orderRoutes);
app.use("/payment", paymentRoutes);
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://nithin:nithin@cluster0.itl5igy.mongodb.net/pets-mart?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(console.log("Database connected"));
app.listen(4000, () => {
  console.log("started on", 4000);
});
