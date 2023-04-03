const countdownHour = new Date("April 7, 2023 00:00:00").getTime();
let day = document.getElementById("days");
let hour = document.getElementById("hours");
let minute = document.getElementById("minutes");
let second = document.getElementById("seconds");

setInterval(() => {
  let dd;
  let hh;
  let mm;
  let ss;

  dd = Math.trunc(convertDays(countdownHour - Date.now()));
  hh = Math.trunc(convertHours(countdownHour - Date.now()));
  mm = Math.trunc(convertMinutes(countdownHour - Date.now()));
  ss = Math.trunc(convertSeconds(countdownHour - Date.now()));

  console.log(dd);
  console.log(hh);
  console.log(mm);
  console.log(ss);

  day.innerText = convertToTwoDecimal(dd);
  hour.innerText = convertToTwoDecimal(hh);
  minute.innerText = convertToTwoDecimal(mm);
  second.innerText = convertToTwoDecimal(ss);
}, 1000);

function convertDays(ms) {
  d = ms / (24 * 3600 * 1000);
  return d;
}

function convertHours(ms) {
  h = (ms / (3600 * 1000)) % 24;
  return h;
}

function convertMinutes(ms) {
  m = (ms / (60 * 1000)) % 60;
  return m;
}

function convertSeconds(ms) {
  s = (ms / 1000) % 60;
  return s;
}

function convertToTwoDecimal(val) {
  if (val < 10) {
    val = "0" + val;
  }

  return val;
}
