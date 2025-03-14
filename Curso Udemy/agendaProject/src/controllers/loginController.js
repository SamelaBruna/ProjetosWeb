const Login = require("../models/LoginModel");
const classLogin = require("../models/LoginModel");

exports.index = (req, res) => {
  res.render("login");
};

exports.register = async (req, res) => {
  try {
    const login = new classLogin(req.body);
    await login.register();

    if (login.errors.length > 0) {
      req.flash("errors", login.errors);
      req.session.save(function () {
        //salvar a sessao
        return res.redirect("/login/index");
      });
      return;
    }
    req.flash("success", "Usuario cadastrado com sucesso!");
    req.session.save(function () {
      //salvar a sessao
      return res.redirect("/login/index");
    });
  } catch (e) {
    console.log(e);
    return res.render("404");
  }
};

exports.login = async () => {
  try {
    const login = new classLogin(req.body);
    await login.login();

    if (login.errors.length > 0) {
      req.flash("errors", login.errors);
      req.session.save(function () {
        //salvar a sessao
        return res.redirect("/login/index");
      });
      return;
    }
    req.flash("success", "Login feito com sucesso!");
    req.session.user = login.user;
    req.session.save(function () {
      //salvar a sessao
      return res.redirect("/login/index");
    });
  } catch (e) {
    console.log(e);
  }
};
