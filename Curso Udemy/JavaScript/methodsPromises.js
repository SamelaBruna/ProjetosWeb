function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject("Bad value");
      return;
    }
    setTimeout(() => {
      resolve(msg.toUpperCase() + " - Promise approved");
    }, time);
  });
}

// const arrayOfPromises = [
//   wait("Promise 1", 2000),
//   wait("Promise 2", 1000),
//   wait("Promise 3", 500),
// ];

// Promise.all(arrayOfPromises)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// Promise.race(arrayOfPromises) //retorna a primeira promise resolvida ou rejeitada
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

function downloadPage() {
  const flagCache = true;

  if (flagCache) {
    return Promise.resolve("Cached page");
  } else {
    return wait("Page downloaded", 3000);
  }
}

downloadPage()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
