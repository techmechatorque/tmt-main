import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import internshipRoutes from "./routes/internshipRoutes.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

const app = express();

// CORS
app.use(
  cors({
    origin: "*", // in production you can restrict to your frontend URL
    credentials: false,
  })
);

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for form-encoded bodies (not files)

// 🔗 MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("DB Error:", err));

// ☁️ Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Root route for quick test
app.get("/", (req, res) => {
  res.send("✅ TMT Internship Backend is running");
});

// ✅ Health check route (optional)
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "API is healthy",
    time: new Date().toISOString(),
  });
});

// ✅ Internship routes
// Frontend calls: POST /api/intern-apply
app.use("/api/intern-apply", internshipRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
