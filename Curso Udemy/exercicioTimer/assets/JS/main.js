const timer = document.querySelector(".timer");
const startButton = document.querySelector("#start-button");
const pauseButton = document.querySelector("#pause-button");
const resetButton = document.querySelector("#reset-button");
let seconds = document.querySelector("#second");
let minutes = document.querySelector("#minute");
let hours = document.querySelector("#hour");

let hh = 0;
let mm = 0;
let ss = 0;

let idInterval;

function getTime() {
  idInterval = setInterval(
    () => {
      ss++;

      if (ss === 60) {
        ss = 0;
        mm++;
      }
      if (mm === 60) {
        mm = 0;
        hh++;
      }

      updateCron();
    },

    1000
  );
}

function start() {
  pause();
  getTime();
}

function reset() {
  ss = 0;
  mm = 0;
  hh = 0;
  updateCron();
}

function pause() {
  clearInterval(idInterval);
}

function updateCron() {
  seconds.innerHTML = formatTime(ss);
  minutes.innerHTML = formatTime(mm);
  hours.innerHTML = formatTime(hh);
}

function formatTime(val) {
  if (val < 10) {
    val = "0" + val;
  }
  return val;
}

startButton.addEventListener("click", function (event) {
  start();
});

pauseButton.addEventListener("click", function (event) {
  pause();
});

resetButton.addEventListener("click", function (event) {
  reset();
  pause();
});
