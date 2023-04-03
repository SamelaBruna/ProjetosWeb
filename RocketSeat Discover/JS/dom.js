const elementId = document.getElementById("blog-title");
console.log(elementId);

const elementClass =
  document.getElementsByClassName("one"); /* Pegar elementos pelas classe */
console.log(elementClass);

const elementTag =
  document.getElementsByTagName(
    "p"
  ); /* Retorna todos os elementos contidos n objeto */
console.log(elementTag);

const elementQuery =
  document.querySelector("p"); /*Retorna apenas o primeiro elemento */
console.log(elementQuery);

/*elementQuery.textContent = elementQuery.forEach(
  (p) => (p.textContent = "Alterando o paragrafo")
); */

console.log(
  elementQuery.textContent
); /*verifica o valor de texto dentro do element */

elementQuery.innerHTML = "Alterando o <strong> primeiro </strong> paragrafo";
console.log(elementQuery.innerText);
