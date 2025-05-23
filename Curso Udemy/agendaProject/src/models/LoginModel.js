const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");

//modelagem dos dados
const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  nickname: { type: String, required: true },
});

const LoginModel = mongoose.model("Login", LoginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors = []; //variavel que vai controlar se o usuario pode ou nao ser cadstrado na base de dados
    this.user = null;
  }

  validation() {
    this.cleanUp(); //limpando o objeto pra garantir que só tem email e password nele
    //Email precisa ser valido
    //senha precisa ter entre 6 e 12 caracteres
    if (!validator.isEmail(this.body.email))
      //checa se o email NAO é validor
      this.errors.push("E-mail inválido"); //caso nao envia uma mensagem de erro pra o array de errors
    if (this.body.password.length < 6 || this.body.password.length > 12)
      this.errors.push(
        "Senha inválida! É preciso ter entre 6 e 12 caracteres!"
      );

    //if (this.body.nickname.length < 8) console.log("checando nickname"); //Acho que eh pq eu tento fazer a validacao no momento de logar e nesse momento nao esta sendo passado o nickname no corpo da requisicao
    //this.errors.push("O apelido deve ter entre 3 e 8 caracteres!");
  }

  async register() {
    //sempre que houver operacoes na base de dados é obrigatório o uso de Promises dessa forma esse metodo precisa usar async
    if (this.body.nickname.length < 3 || this.body.nickname.length > 8)
      this.errors.push("O apelido deve conter entre 3 8 caracteres");
    this.validation();
    //caso existe algum erro eu nao posso logar o usuario
    if (this.errors.length > 0) return;
    this.userExists();
    if (this.errors.length > 0) return; //checando novamente se ha erros apos verificar se existe usuario

    const salt = bcryptjs.genSaltSync();
    this.body.password = bcryptjs.hashSync(this.body.password, salt);

    this.user = await LoginModel.create(this.body);
  }

  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== "string") {
        this.body[key] = "";
      }
    }
    this.body = {
      email: this.body.email,
      password: this.body.password,
      nickname: this.body.nickname,
    };
  }

  async userExists() {
    this.user = await LoginModel.findOne({ email: this.body.email });
    if (this.user) this.errors.push("Usuario ja existe!");
  }

  async login() {
    this.validation();
    if (this.errors.length > 0) return;
    this.user = await LoginModel.findOne({ email: this.body.email });

    if (!this.user) {
      this.errors.push("Usuario nao existe!");
      return;
    }

    if (!bcryptjs.compareSync(this.body.password, this.user.password)) {
      this.errors.push("Senha invalida!");
      this.user = null;
      return;
    }
  }
}

module.exports = Login;
