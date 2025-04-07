const Contato = require("../models/ContactModel");

exports.index = async (req, res) => {
  if (res.locals.user) {
    const contatos = await Contato.searchContactsByUser(res.locals.user);

    res.render("index", { contatos });
    return;
  }
  res.render("login");
};
