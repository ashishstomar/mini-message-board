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

function handleIndexData(req, res) {
  return res.render("home", {
    data: messages,
  });
}

function handleFormData(req, res) {
  const { name, msg } = req.body;
  messages.push({
    text: msg,
    user: name,
    added: new Date().toLocaleString(),
  });
  res.redirect("/");
}

module.exports = { handleIndexData, handleFormData };
