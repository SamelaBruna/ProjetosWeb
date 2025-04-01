const Contato = require("../models/ContactModel");

exports.index = async (req, res) => {
  const contatos = await Contato.searchContacts();

  res.render("index", { contatos });
};
