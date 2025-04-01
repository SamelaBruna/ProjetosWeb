const mongoose = require("mongoose");
const validator = require("validator");
const Login = require("./LoginModel");

//modelagem dos dados
const ContactSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: { type: String, required: false },
  email: { type: String, required: false },
  telefone: { type: String, required: false },
  criadoEm: { type: Date, default: Date.now },
  criadoPor: { type: mongoose.Schema.Types.ObjectId, ref: "Login" }, //NAO FUNCIONA
});

const ContactModel = mongoose.model("Contato", ContactSchema);

class Contact {
  constructor(body) {
    this.body = body;
    this.errors = []; //variavel que vai controlar se o usuario pode ou nao ser cadstrado na base de dados
    this.contatos = null;
  }
  cleanUp() {
    for (const key in this.body) {
      if (typeof this.body[key] !== "string") {
        this.body[key] = "";
      }
    }
    this.body = {
      nome: this.body.nome,
      sobrenome: this.body.sobrenome,
      email: this.body.email,
      telefone: this.body.telefone,
    };
  }
  validation() {
    this.cleanUp();
    if (this.body.email && !validator.isEmail(this.body.email))
      //checa se o email NAO é validor
      this.errors.push("E-mail inválido"); //caso nao envia uma mensagem de erro pra o array de errors
    if (!this.body.nome) this.errors.push("Nome é um campo obrigatório");
    if (!this.body.email && !this.body.telefone)
      this.errors.push("Um email ou telefone deve ser fornecido!");
  }

  async register() {
    //como vai trabalhar com a base de dados necessario ser async
    //so registrar se nao houver erros
    this.validation();
    if (this.errors.length > 0) return;
    this.contatos = await ContactModel.create(this.body);
  }

  async edit(id) {
    if (typeof id !== "string") return;
    this.validation();
    if (this.errors.length > 0) return;
    const objId = new mongoose.Types.ObjectId(id);
    this.contatos = await ContactModel.findOneAndUpdate(objId, this.body, {
      new: true,
    }); //esse new:true serve pra retornar os dados atualiazados
  }

  static async searchForId(id) {
    //Metodo estaticos não são chamados na instâncias da classe. Em vez disso, eles são chamados na própria classe.
    if (typeof id !== "string") return;
    const contato = await ContactModel.findById(id);
    return contato;
  }

  static async searchContacts() {
    //Metodo estaticos não são chamados na instâncias da classe. Em vez disso, eles são chamados na própria classe.
    const contatos = await ContactModel.find().sort({ criadoEm: -1 });
    return contatos;
  }
}

module.exports = Contact;
