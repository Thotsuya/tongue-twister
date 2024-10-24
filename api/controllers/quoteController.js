const fs = require("fs");
const transporter = require("../config/emailConfig");

const processQuoteRequest = (req, res) => {
  const {
    localizationType,
    industry,
    language, 
    volume, 
    projectLength,
    name,
    email,
    jobTitle, 
    clientType,
    additionalQueries,
  } = req.body;

  const file = req.file;
 
  if (!localizationType || !industry || !language || !volume || !name || !email) {
    return res.status(400).json({ error: "Please fill in all required fields." });
  }

  let emailText = `New quote request: 
  Localization Type: ${localizationType}  
  Industry: ${industry}  
  Language: ${language}  
  Volume: ${volume}
  Project Length: ${projectLength}
  Name: ${name}
  Email: ${email}
  Job Title: ${jobTitle}
  Client Type: ${clientType}
  Additional Queries: ${additionalQueries}`;
 
  if (file) { 
    emailText += `\n\nAttached file: ${file.filename}`;
  } 

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "New Localization Quote Request",
    text: emailText,
    attachments: file
      ? [
        {
          filename: file.originalname,
          path: file.path,
        },
      ]
      : [],

  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Error sending email. Please try again." });
    }

    if (file) {
      fs.unlink(file.path, (err) => {
        if (err) {
          console.error("Error deleting file:", err);
        }
      });
    }

    console.log("Email sent:", info.response);
    res.status(200).json({ message: "Quote request submitted successfully" }); 
  });
};

module.exports = processQuoteRequest;