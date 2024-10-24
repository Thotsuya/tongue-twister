  const errorHandler = (err, req, res, next) => {
    console.error("Error stack:", err.stack);
    if (err instanceof multer.MulterError) {
      console.error("Multer Error:", err.message);
      return res.status(400).json({ error: "File upload error. Please try again." });
    } else if (err) {
      console.error("General Error:", err.message);
      return res.status(500).json({ error: "Internal server error. Please try again later." });
    }
    next();
  };

  module.exports = errorHandler;
  