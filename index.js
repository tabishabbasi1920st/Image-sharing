const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send("<h1>Server is running</h1>");
});

app.listen(5000, () => {
  console.log("Server is running at port 5000");
});

app.post("/upload-image", (req, res) => {
  const { image } = req.body;

  const bufferedImage = Buffer.from(image, "base64");
  fs.writeFileSync("images/test_image.jpg", bufferedImage);
});
