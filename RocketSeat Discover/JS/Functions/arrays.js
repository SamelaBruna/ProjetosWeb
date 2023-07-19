let techs = ["html", "css", "js"];

//Adicionar um item no fim
techs.push("nodejs");
//Adicionar um item no inicio
techs.unshift("sql");
//remover do fim
//techs.pop();
//remover do começo
//techs.shift();
//pegar somente alguns elementos do array
//console.log(techs.slice(1, 3));
//remover 1 ou mais itens em qualquer posição do array
//techs.splice(1, 1); //altera o array
//encontrar a posição de um elemento do array
let index = techs.indexOf("js");
techs.splice(index, 1);
console.log(index);
console.log(techs);
