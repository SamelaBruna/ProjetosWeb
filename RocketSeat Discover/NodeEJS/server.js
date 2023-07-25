const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  const items = [
    {
      title: "T",
      message: "Alguma palavra com T",
    },
    {
      title: "E",
      message: "Alguma palavra com E",
    },
    {
      title: "S",
      message: "Alguma palavra com S",
    },
    {
      title: "T",
      message: "Alguma palavra com T",
    },
    {
      title: "E",
      message: "Alguma palavra com E",
    },
  ];

  const subtitle =
    "Uma linguagem de modelagem para criação de página HTML utilizando JS";

  res.render("pages/index", {
    qualitys: items,
    subtitle: subtitle,
  });
});

app.get("/about", function (req, res) {
  res.render("pages/about");
});

app.listen(8080);
console.log("Rodando");
