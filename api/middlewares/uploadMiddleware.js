const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadsDir = path.join(__dirname, "../uploads");

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}
 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const validTypes = [
    "audio/mpeg",
    "audio/wav",
    "video/mp4",
    "video/x-matroska",
    "text/plain",
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  if (validTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only audio, video, and text files are allowed."), false);
  }
};
 
const upload = multer({  
  storage,
  limits: { fileSize: 25 * 1024 * 1024 },
  fileFilter,
});

module.exports = upload;
