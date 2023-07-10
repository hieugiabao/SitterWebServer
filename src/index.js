const express = require("express");
const app = express();
const route = require("./routes");
require("dotenv").config();
const multer = require("multer");
const fs = require("fs");
const port = process.env.PORT || 5000;

const upload = multer({ dest: "public/uploads/" });

const cors = require("cors");

// public uploads folder

app.use("/public", express.static("public"));

app.use(
  cors({
    origin: (process.env.CLIENT_URL || "").split(","),
  })
); // Use this after the variable declaration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
route(app);

app.post("/upload", upload.single("file"), (req, res) => {
  // rename file
  try {
    const { file } = req;
    const { path, originalname } = file;
    const newFileName = `${path}-${originalname}`;
    fs.renameSync(path, newFileName);
    req.file.path = newFileName;
    res.json({ path: newFileName });
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.listen(port, () => {
  console.log(`server running on port: http://localhost:${port}`);
});
