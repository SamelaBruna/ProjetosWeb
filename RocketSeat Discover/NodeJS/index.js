const questions = [
  "O que eu aprendi hoje?",
  "O que me aborreceu hoje?",
  "O que me deixou feliz hoje?",
];

const ask = (index = 0) => {
  process.stdout.write("\n" + questions[index] + "> ");
};

ask();

const answers = [];
process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on("exit", () => {
  console.log(
    `\n Bacana Bruna!
         O que voce aprendeu foi ${answers[0]}
         O que te aborreceu foi ${answers[1]}
         O que te deixou feliz foi ${answers[2]}
         Volte amanha para mais reflexões! 
        `
  );
});
