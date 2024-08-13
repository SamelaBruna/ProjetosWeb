//try define um bloco de código para executar (to try).
//catch define um bloco de código para manipular qualquer erro.
//throw define um erro personalizado.

function sum(x, y) {
  if (typeof x !== "number" || typeof x !== "number") {
    throw "x e y precisam ser numeros";
  }

  return x + y;
}

try {
  console.log(sum(1, 5));
  console.log(sum("1", 5));
} catch (e) {}

//Se você usar throw junto com try e catch, poderá
//controlar o fluxo do programa e gerar mensagens
//de erro personalizadas.
