const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade – Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

const totalCategories = booksByCategory.length;
console.log(totalCategories);
let authors = [];
let booksAC = [];
let totalBooksByCategory = 0;
for (let i = 0; i < totalCategories; i++) {
  console.log(
    `Na categoria ${booksByCategory[i].category} existe um total de ${booksByCategory[i].books.length} livros`
  );
  for (let j = 0; j < booksByCategory[i].books.length; j++) {
    if (!authors.includes(booksByCategory[i].books[j].author))
      authors.push(booksByCategory[i].books[j].author);
    if (booksByCategory[i].books[j].author === "Augusto Cury") {
      booksAC.push(booksByCategory[i].books[j].title);
    }
  }
}
console.log(`Existem ${authors.length} autores`);

function booksOfAuthor(atr) {
  let booksbyAuthor = [];
  for (let i = 0; i < totalCategories; i++) {
    for (let j = 0; j < booksByCategory[i].books.length; j++) {
      if (booksByCategory[i].books[j].author === atr) {
        booksbyAuthor.push(booksByCategory[i].books[j].title);
      }
    }
  }
  console.log(`O(s) Livro(s) do autor ${atr}: ${booksbyAuthor}`);
}

booksOfAuthor("Augusto Cury");
