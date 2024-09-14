const express = require("express");
const path = require("path");
const router = require("./routes/routes");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.urlencoded({ extended: true }));

app.get("/", router);

app.post("/new", router);

const PORT = 3000;
app.listen(PORT, () => `Server started at PORT ${PORT}`);
