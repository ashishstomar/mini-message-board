require("dotenv").config();
const express = require("express");
const path = require("path");
const router = require("./routes/routes");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: true }));

app.get("/", router);

app.post("/new", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server started at PORT ${PORT}`)
);
