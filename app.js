const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, res) => {
  return res.render("home");
});

app.get("/new", (req, res) => {});

const PORT = 3000;
app.listen(PORT, () => `Server started at PORT ${PORT}`);
