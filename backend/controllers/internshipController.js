import InternshipApplication from "../models/InternshipApplication.js";
import { uploadToCloudinary } from "../utils/cloudinaryUpload.js";
import { sendMail } from "../utils/sendMail.js";

const MAX_RESUME_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB

// Simple validators
const isValidEmail = (email) => {
  if (!email) return false;
  // Basic RFC-style email regex
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const isValidMobile = (mobile) => {
  if (!mobile) return false;
  // Indian 10-digit number starting from 6–9
  const re = /^[6-9][0-9]{9}$/;
  return re.test(mobile);
};

const isValidYear = (year) => {
  if (!year) return false;
  const re = /^\d{4}$/;
  if (!re.test(year)) return false;
  const y = parseInt(year, 10);
  // allow reasonable range for interns
  return y >= 2000 && y <= 2100;
};

export const submitApplication = async (req, res) => {
  try {
    const {
      fullName,
      email,
      mobile,
      college,
      year,
      branch,
      role,
      about
    } = req.body || {};

    // --------- BASIC REQUIRED FIELDS ---------
    if (!fullName || !email || !mobile || !college || !year || !branch || !role || !about) {
      return res.status(400).json({
        success: false,
        error: "All fields are required.",
      });
    }

    // --------- STRING LENGTH CONSTRAINTS ---------
    if (fullName.trim().length < 3 || fullName.trim().length > 100) {
      return res.status(400).json({
        success: false,
        error: "Full Name must be between 3 and 100 characters.",
      });
    }

    if (college.trim().length < 3 || college.trim().length > 150) {
      return res.status(400).json({
        success: false,
        error: "College Name must be between 3 and 150 characters.",
      });
    }

    if (branch.trim().length < 2 || branch.trim().length > 80) {
      return res.status(400).json({
        success: false,
        error: "Branch must be between 2 and 80 characters.",
      });
    }

    if (role.trim().length < 2 || role.trim().length > 80) {
      return res.status(400).json({
        success: false,
        error: "Role must be between 2 and 80 characters.",
      });
    }

    if (about.trim().length < 30 || about.trim().length > 1000) {
      return res.status(400).json({
        success: false,
        error: "Short Introduction must be between 30 and 1000 characters.",
      });
    }

    // --------- FORMAT VALIDATIONS ---------
    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        error: "Please provide a valid email address.",
      });
    }

    if (!isValidMobile(mobile)) {
      return res.status(400).json({
        success: false,
        error: "Please provide a valid 10-digit Indian mobile number.",
      });
    }

    if (!isValidYear(year)) {
      return res.status(400).json({
        success: false,
        error: "Year of passing must be a valid 4-digit year.",
      });
    }

    // --------- FILE VALIDATION (PDF + SIZE) ---------
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: "Resume file is required.",
      });
    }

    const { mimetype, size, originalname } = req.file;

    // MIME check (backend-level)
    const isPdfMime =
      mimetype === "application/pdf" ||
      originalname.toLowerCase().endsWith(".pdf");

    if (!isPdfMime) {
      return res.status(400).json({
        success: false,
        error: "Invalid file type. Only PDF resumes are allowed.",
      });
    }

    if (size > MAX_RESUME_SIZE_BYTES) {
      return res.status(400).json({
        success: false,
        error: "File too large. Maximum resume size is 5 MB.",
      });
    }

    // --------- UPLOAD TO CLOUDINARY ---------
    const uploaded = await uploadToCloudinary(req.file.buffer);

    // --------- SAVE APPLICATION IN DB ---------
    const application = await InternshipApplication.create({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      mobile: mobile.trim(),
      college: college.trim(),
      year: year.trim(),
      branch: branch.trim(),
      role: role.trim(),
      about: about.trim(),
      resumeUrl: uploaded.secure_url,
    });

    // --------- SEND CONFIRMATION EMAIL ---------
    const emailBody = `
     <div style="
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #ffffff;
      max-width: 600px;
      margin: 0 auto;
      border: 1px solid #333333;
      border-radius: 8px;
      overflow: hidden;
      background-color:#000000;
    ">

      <!-- IMAGE BANNER (reduced height) -->
      <div
        style="
          width: 100%;
          height: 100px;
          background-image: url('https://res.cloudinary.com/dvhqdvoof/image/upload/v1765079670/WhatsApp_Image_2025-12-06_at_1.09.31_PM_s3vnf6.jpg');
          background-size: cover;
          background-position: center;
        "
      >
        <img
          src="https://res.cloudinary.com/dvhqdvoof/image/upload/v1765079670/WhatsApp_Image_2025-12-06_at_1.09.31_PM_s3vnf6.jpg"
          alt="TechMecha Torque"
          style="display:block; width:100%; height:100px; object-fit:cover;"
        />
      </div>

      <!-- BODY -->
      <div style="padding: 30px;">
        <h2 style="
          color: #ffffff;
          border-bottom: 2px solid #333333;
          padding-bottom: 10px;
          margin-top:0;
        ">
          Hello ${fullName},
        </h2>
        
        <p style="font-size: 16px; color:#ffffff;">
          Thank you for applying for the <strong>${role}</strong> internship at <strong>TechMecha Torque</strong>. We appreciate your interest!
        </p>

        <h3 style="color: #ffffff; margin-top: 25px; margin-bottom: 15px;">
          Your Application Details:
        </h3>

        <table style="width: 100%; border-collapse: collapse; font-size:14px; color:#ffffff;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 30%;">Full Name:</td>
            <td style="padding: 8px 0;">${fullName}</td>
          </tr>
          <tr style="background-color: #111111;">
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Mobile:</td>
            <td style="padding: 8px 0;">${mobile}</td>
          </tr>
          <tr style="background-color: #111111;">
            <td style="padding: 8px 0; font-weight: bold;">College:</td>
            <td style="padding: 8px 0;">${college}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Role Applied:</td>
            <td style="padding: 8px 0; font-weight: bold;">${role}</td>
          </tr>
          <tr style="background-color: #111111;">
            <td style="padding: 8px 0; font-weight: bold;">Year/Branch:</td>
            <td style="padding: 8px 0;">${year}, ${branch}</td>
          </tr>
        </table>

        <!-- MESSAGE -->
        <p style="margin-top: 20px; font-style: italic; color: #cccccc;">
          We are currently reviewing your application and will get back to you.
        </p>

        <!-- KEEP LEARNING -->
        <p style="
          margin-top: 6px;
          text-align: center;
          font-weight: bold;
          letter-spacing: 1px;
          color: #ffffff;
        ">
          Keep Learning
        </p>
        
        <!-- BUTTON -->
        <div style="text-align: center; margin-top: 30px;">
          <a href="https://techmechatorque.com/" 
             style="
               display: inline-block;
               padding: 12px 22px;
               background-color: #e53935;
               color: #ffffff;
               text-decoration: none;
               border-radius: 5px;
               font-weight: bold;
               font-size:14px;
             ">
            Visit Our Website
          </a>
        </div>
      </div>
      
      <!-- FOOTER -->
      <div style="
        background-color: #111111;
        padding: 20px;
        text-align: center;
        border-top: 1px solid #333333;
      ">
        <p style="margin: 0; font-size: 12px; color: #bbbbbb;">
          Regards,<br/>
          The TechMecha Torque Technical Team<br/>
          <a href="mailto:careers@techmechatorque.com" style="color: #ffffff; text-decoration: none;">
            careers@techmechatorque.com
          </a>
        </p>
      </div>

    </div>
    `;

    await sendMail(
      email,
      "✅ Application Submitted - TechMecha Torque Internship",
      emailBody
    );

    res.status(201).json({ success: true, application });
  } catch (err) {
    console.error("Submit Error:", err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

export const getAllApplications = async (_req, res) => {
  const items = await InternshipApplication.find().sort({ createdAt: -1 });
  res.json({ success: true, items });
};

export const deleteApplication = async (req, res) => {
  await InternshipApplication.findByIdAndDelete(req.params.id);
  res.json({ success: true });
};

export const markAsRead = async (req, res) => {
  await InternshipApplication.findByIdAndUpdate(req.params.id, { read: true });
  res.json({ success: true });
};
