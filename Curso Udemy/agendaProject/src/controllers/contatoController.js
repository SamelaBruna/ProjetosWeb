const Contact = require("../models/ContactModel");

exports.index = (req, res) => {
  res.render("contato");
};

exports.register = async (req, res) => {
  const contato = new Contact(req.body);
  await contato.register();
  res.send("oi");
};
