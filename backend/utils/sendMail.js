import nodemailer from "nodemailer";

export const sendMail = async (to, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      },
      tls:{
        rejectUnauthorized:false,
      }
    });

    await transporter.sendMail({
      from: `"TechMecha Torque" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html
    });

    console.log("📧 Mail sent to:", to);
  } catch (error) {
    console.error("Email send failed:", error);
  }
};
