const express = require("express");
const {
  handleIndexData,
  handleFormData,
} = require("../controllers/handleForm");
const router = express.Router();

router.get("/", handleIndexData);

router.post("/new", handleFormData);

module.exports = router;
