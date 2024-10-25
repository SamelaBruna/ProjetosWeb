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
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiURL);

  return response.json();
}

async function showInformations(city = "Montreal") {
  const weatherDatas = await getFetchData(city);
  const cityElement = document.querySelector("#city");
  const stateWeather = document.querySelector("#state");

  cityElement.innerHTML =
    city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
  const temperature = document.querySelector("#temp");
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather: [{ id, main }],
  } = weatherDatas;
  console.log(Math.trunc(temp));
  temperature.innerHTML = Math.trunc(temp) + "°";
  const icon = getWeatherIcons(id);
  console.log(icon);
  weatherIcon.setAttribute("src", icon);
  stateWeather.innerHTML = main;
  console.log(weatherDatas);
}

function getWeatherIcons(id) {
  if (id <= 232) return "thunderstorm.svg";
  if (id === 803) return "./assets/img/cloud.svg";
}
