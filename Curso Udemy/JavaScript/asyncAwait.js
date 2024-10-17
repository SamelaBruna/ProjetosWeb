function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("Bad value");
        return;
      }
      resolve(msg.toUpperCase() + " - Promise approved");
    }, time);
  });
}

async function execut() {
  try {
    const p1 = await wait("Promise 1", 1000);
    console.log(p1);
    const p2 = await wait("Promise 2", 1000);
    console.log(p2);
    const p3 = await wait(4763, 1000);
    console.log(p3);
  } catch (e) {
    console.log(e);
  }
}
execut();
