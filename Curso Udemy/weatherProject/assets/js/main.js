const citySearch = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");
const weatherIcon = document.querySelector("#imgMain");

const apiKey = "92c8a3e53f1e919c60c763020426bd5e";

showInformations();

searchButton.addEventListener("click", () => {
  if (citySearch.value.trim() != "") {
    showInformations(citySearch.value);
    citySearch.value = "";
  }
});

citySearch.addEventListener("keypress", (e) => {
  if (e.keyCode === 13 && citySearch.value.trim() != "") {
    showInformations(citySearch.value);
    console.log(citySearch.value);
    citySearch.value = "";
  }
});

async function getFetchData(city = "Montreal") {
  //retorna uma promise
  //const apiURL = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${apiKey}`;
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiURL);

  return response.json();
}

async function showInformations(city = "Montreal") {
  const weatherDatas = await getFetchData(city);
  const cityElement = document.querySelector("#city");
  const stateWeather = document.querySelector("#state");
  const temperature = document.querySelector("#temp");
  const tempMax = document.querySelector("#max");
  const tempMin = document.querySelector("#min");
  const currentDateEl = document.querySelector("#date");
  const feelsLikeEl = document.querySelector("#feels");

  currentDateEl.innerHTML = getCurrentDate();

  cityElement.innerHTML =
    city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather: [{ id, main: weatherMain }],
  } = weatherDatas;

  temperature.innerHTML = Math.round(temp) + "°";
  tempMax.innerHTML = Math.round(temp_max) + "°";
  tempMin.innerHTML = Math.round(temp_min) + "°";
  feelsLikeEl.innerHTML = "Feels Like: " + Math.round(feels_like) + "°";

  const icon = getWeatherIcons(id);
  weatherIcon.setAttribute("src", icon);
  stateWeather.innerHTML = weatherMain;

  console.log(weatherDatas);
}

function getWeatherIcons(id) {
  if (id <= 232) return "./assets/img/thunderstorm.svg";
  if (id <= 321) return "./assets/img/cloud.svg";
  if (id <= 531) return "./assets/img/raing.svg";
  if (id <= 622) return "./assets/img/snow2.svg";
  if (id <= 781) return "./assets/img/mist.svg";
  if (id <= 800) return "./assets/img/sunny.svg";
  if (id <= 804) return "./assets/img/fewclouds.svg";
}

function getCurrentDate() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date();
  const day = date.getDate();
  const dayWeek = days[date.getDay() - 1];
  const month = months[date.getMonth()];

  return `${dayWeek}, ${month} ${day}`;
}
