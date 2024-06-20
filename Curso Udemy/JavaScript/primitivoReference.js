//Valores primitivos e valores por referencia

/* Valores primitivos:(imutaveis) number, undefined, string, null(bigint, symbol), bolean - valores copiados
   Referencia (mutaveis): arrays, object, function - valores passados por referencia

*/

let a = "A";
let b = a; //ira fazer uma copia de a
console.log(a, b); //ira imprimir: A A
a = "B";
console.log(a, b); // ira imprimir: B A
//como foi feito uma copia o valor da variavel b nao vai alterar junto com a variavel A
// quando o dado for primitivo basicamente estaremos fazendo uma copia

let x = [1, 2, 3];
let y = x;
let z = [...x]; //spread, em resumo faz realmente uma copia de x, se o x for alterado z nao sera
console.log(x, y);
x.push(4);
console.log(x, y, z);
//nesse caso se eu alterar x o y tb vai ser alterado
//pq ambos apontam pro mesmo lugar da memoria
