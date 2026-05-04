import mongoose from "mongoose";

const InternshipApplicationSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    college: { type: String, required: true },
    year: { type: String, required: true },
    branch: { type: String, required: true },
    role: { type: String, required: true },
    about: { type: String, required: true },
    resumeUrl: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: "intern_apply_inbox" 
  }
);

const InternshipApplication = mongoose.model(
  "InternshipApplication",
  InternshipApplicationSchema
);

export default InternshipApplication;
