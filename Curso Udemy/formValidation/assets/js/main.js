class formValidation {
  constructor() {
    this.myForm = document.querySelector(".myForm");
    this.events();
  }

  events() {
    //lembrando que com uma arrow function eu nao perco o this de dentro da classe, sendo assim o this vai ser a propria instancia
    this.myForm.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    //console.log("formulario nao enviado");
    const validateFilters = this.checkFilters();
    const validatePassword = this.checkPasswords();

    if (validateFilters && validatePassword) {
      alert("formulario enviado");
      this.myForm.submit();
    }
  }

  checkFilters() {
    let validate = true;
    for (let errorText of this.myForm.querySelectorAll(".error-text")) {
      //removendo erros para evitar adicionar varias msgs
      errorText.remove();
    }

    for (let field of this.myForm.querySelectorAll(".validate")) {
      if (!field.value) {
        //se o campo estiver vazio
        let label = field.previousElementSibling.innerText; //elemento irmao anterior
        this.createErrors(field, `Campo ${label} nao pode ser vazio`);
        validate = false;
      }
      if (field.classList.contains("cpf")) {
        if (!this.cpfValidate(field)) validate = false;
      }
      if (field.classList.contains("user")) {
        if (!this.userValidation(field)) validate = false;
      }
    }
    return validate;
  }

  createErrors(field, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    field.insertAdjacentElement("afterend", div); //inserir um elemento HTML em uma posição específica em relação a um outro elemento no DOM.
  }

  cpfValidate(field) {
    let cpf = new Cpf(field.value);
    if (!cpf.validation()) {
      this.createErrors(field, "CPF invalido!");
      return false;
    }
    return true;
  }

  userValidation(field) {
    let valid = true;
    const user = field.value;
    if (user.length > 12 || user.length < 3) {
      this.createErrors(field, "Usuario deve ter entre 3 e 12 caracteres");
      valid = false;
    }
    if (!user.match(/^[a-zA-Z0-9]+$/g)) {
      this.createErrors(field, "Usuario deve conter apenas letras e numeros");
      valid = false;
    }
    return valid;
  }

  checkPasswords(field) {
    let validPassword = true;
    const password = this.myForm.querySelector(".password");
    const repeatPassword = this.myForm.querySelector(".repeat-password");
    if (password.length < 6 || password.length > 12) {
      validPassword = false;
      this.createErrors(field, "senha deve conter entre 6 e 12 caracteres");
    }

    if (password.value != repeatPassword.value) {
      validPassword = false;
      this.createErrors(password, "As senhas precisam ser iguais");
      this.createErrors(repeatPassword, "As senhas precisam ser iguais");
    }

    return validPassword;
  }
}

const validation = new formValidation();
