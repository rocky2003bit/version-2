const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "handsomerocky3661@gmail.com",       // 👈 replace
    pass: "oxil zwtu hbqn swlc"            // 👈 replace
  }
});

async function sendResetEmail(toEmail, resetLink) {
  await transporter.sendMail({
    from: "Cango Support <YOUR_GMAIL@gmail.com>",
    to: toEmail,
    subject: "Reset your Cango password",
    html: `
      <p>You requested to reset your password.</p>
      <p>Click the link below to reset it:</p>
      <a href="${resetLink}">${resetLink}</a>
      <p>This link expires in 15 minutes.</p>
    `
  });
}

module.exports = { sendResetEmail };
