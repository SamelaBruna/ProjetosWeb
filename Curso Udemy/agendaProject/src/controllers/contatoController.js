const Contact = require("../models/ContactModel");

exports.index = (req, res) => {
  // console.log(req.session.user);
  res.render("contato", { contato: {} });
};

exports.register = async (req, res) => {
  try {
    const contato = new Contact(req.body, res.locals.user);
    await contato.register();

    if (contato.errors.length > 0) {
      req.flash("errors", contato.errors);
      req.session.save(() => res.redirect("back"));
      return;
    }

    req.flash("success", "Contato registrado com sucesso!");

    req.session.save(() => {
      res.redirect("/");
    });
    //console.log(res.locals.user);
    return;
  } catch (e) {
    console.log(e);
    return res.render("404");
  }
};

exports.indexContato = async (req, res) => {
  if (!req.params.id) return res.render("404");

  const contato = await Contact.searchForId(req.params.id);

  if (!contato) return res.render("404");

  res.render("contato", { contato }); //o objeto contato
};

exports.edit = async (req, res) => {
  try {
    if (!req.params.id) return res.render("404");
    const contato = new Contact(req.body, res.locals.user);
    await contato.edit(req.params.id);

    if (contato.errors.length > 0) {
      req.flash("errors", contato.errors);
      req.session.save(() => res.redirect("back"));
      return;
    }

    req.flash("success", "Contato alterado com sucesso!");

    req.session.save(() =>
      res.redirect(`/contato/index/${contato.contatos._id}`)
    );
    return;
  } catch (e) {
    console.log(e);
    res.render("404");
  }
};

exports.delete = async (req, res) => {
  if (!req.params.id) return res.render("404");

  const contato = await Contact.delete(req.params.id);

  if (!contato) return res.render("404");
  req.flash("success", "Contato apagado com sucesso!");

  req.session.save(() => res.redirect("/"));
  return;
};
