function displayTime() {
  let date = new Date();
  return date.toLocaleTimeString("pt-BR", { hour12: false });
}

const timer = setInterval(() => console.log(displayTime()), 1000);
setTimeout(() => console.log("stoping..."), 4500);
setTimeout(() => clearInterval(timer), 5000);
