const express = require("express");
const path = require("path");

const app = express();
const dir_path = path.join(__dirname, "public");
const port = process.env.PORT || 3000;

app.use(express.static(dir_path));

app.get("/", (req, res) => document.write(dir_path));

app.listen(port, console.log(`listening....... on ${port}`));