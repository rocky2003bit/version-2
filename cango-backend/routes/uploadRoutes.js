const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const router = express.Router();

// ensure folder exists
const postersDir = path.join(__dirname, "../public/posters");
if (!fs.existsSync(postersDir)) fs.mkdirSync(postersDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, postersDir),
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

router.post("/poster", upload.single("poster"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });
  res.json({ poster_url: `/posters/${req.file.filename}` });
});

module.exports = router;
