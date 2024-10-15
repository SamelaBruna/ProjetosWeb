function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("Bad value");
    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

wait("Message 1", rand(1, 3))
  .then((result) => {
    console.log(result);
    return wait("Message 2", rand(1, 3)); //retornando outra promise
  })
  .then((result) => {
    //pegando o dado da promise da linha 18
    console.log(result);
    return wait(34453, rand(1, 3));
  })
  .then((result) => console.log(result)) //pegando o dado da promise da linha 22
  .catch((e) => {
    console.log(e);
  });
