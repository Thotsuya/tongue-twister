const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const upload = require("./middlewares/uploadMiddleware");
const errorHandler = require("./middlewares/errorHandler");
const processQuoteRequest = require("./controllers/quoteController.js");
const processContactRequest = require("./controllers/contactController.js");

require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
const _dirname = path.resolve();

app.post("/api/quote", upload.single("file"), processQuoteRequest);
app.post("/api/contact", processContactRequest);

app.use(express.static(path.join(_dirname, 'client', 'dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(_dirname, 'client', 'dist', 'index.html'));
})


app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
