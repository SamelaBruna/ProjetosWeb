require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose"); // biblioteca pra criar conexao entre o mongoDB e o JS

//conectar o mongoose

const clientPromise = mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then((m) => {
    console.log("banco de dados conectado!");
    app.emit("OK");
    return m.connection.getClient();
  })
  .catch((e) => console.log(e));

const session = require("express-session"); //salvar a sessao na memoria
//O pacote "connect-mongo" é um middleware que permite armazenar sessões do Express em um banco de dados MongoDB
//Ele é usado em conjunto com "express-session" para persistir as sessões, em vez de armazená-las apenas na memória (o que não é ideal para produção).
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");

const routes = require("./routes");
const path = require("path");
//const helmet = require("helmet");
const csrf = require("csurf");

const {
  middlewareGlobal,
  checkCsrfError,
  csfrMiddleware,
} = require("./src/middlewares/middleware");

//app.use(
//helmet({
//contentSecurityPolicy: false,
//})
//);
//O método app.use() é usado no Express.js para adicionar middlewares à aplicação.
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, "public")));

const sessionOptions = session({
  secret: "dsadsdasd dasda dasda", //pode colocar o que quiser contanto que ngm saiba
  store: MongoStore.create({ clientPromise }), //store eh onde vai salvar e dentro coloco o cliente de conexao do mongoDB
  resave: false,
  saveUninitialized: false,
  cookie: {
    //coloca qnt tempo o cookie vai durar
    maxAge: 1000 * 60 * 60 * 24 * 7, //qnt tempo em ms essa sessao vai durar, nesse caso 7 dias
    httpOnly: true,
  },
});

app.use(sessionOptions);
app.use(flash());

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(csrf());
// Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csfrMiddleware);
app.use(routes);

app.on("OK", () => {
  //a partir da emissao do OK no app.emit na linha 10
  app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000");
  });
});
