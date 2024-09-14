const express = require("express");

const router = express.Router();

const messages = [
  {
    text: "Heyyy, fellow space traveler! 🚀✨ Just landed from the Milky Way. How's life on Earth? 🌍",
    user: "Amando the Alien 👽",
    added: new Date().toLocaleString(),
  },
  {
    text: "Just debugging the universe, one line of code at a time. 🌌💻 Anyone else feeling like a wizard today? 🧙‍♂️✨",
    user: "Charles the Coder 🧑‍💻",
    added: new Date().toLocaleString(),
  },
];

router.get("/", (req, res) => {
  return res.render("home", {
    data: messages,
  });
});

router.post("/new", (req, res) => {
  const { name, msg } = req.body;
  messages.push({
    text: msg,
    user: name,
    added: new Date().toLocaleString(),
  });
  res.redirect("/");
});

module.exports = router;
