import express from "express";
import multer from "multer";
import {
  submitApplication,
  getAllApplications,
  deleteApplication,
  markAsRead
} from "../controllers/internshipController.js";

const router = express.Router();

// multer
const upload = multer({ storage: multer.memoryStorage() });

// Routes
router.post("/", upload.single("resume"), submitApplication);
router.get("/all", getAllApplications);
router.delete("/:id", deleteApplication);
router.patch("/read/:id", markAsRead);

export default router;
