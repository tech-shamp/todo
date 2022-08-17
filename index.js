const express = require("express");
const path = require("path");

const app = express();
const dir_path = path.join(__dirname, "public");
const port = process.env.PORT || 999;

app.use(express.static(dir_path));

app.get("/", (req, res) => {
  res.sendFile(path.join(dir_path, "index.html"));
});

app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(dir_path, "index.html"));
});

app.listen(port, console.log(`server listening on ${port}`));
