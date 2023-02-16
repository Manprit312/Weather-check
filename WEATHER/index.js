const weatherApi = {
  key: "3265874a2c77ae4a04bb96236a642d2f",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather?",
};
const searchInputBox = document.getElementById("inputbox");
searchInputBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    console.log(searchInputBox.value);
    getWeatherReport(searchInputBox.value);
  }
});

function getWeatherReport(city) {
  fetch(
     `${weatherApi.baseUrl}q=${city}&appid=${weatherApi.key}`
  )
    .then((weather) => {
      return weather.json();
    })
    .then(showWeatherReport);
}
function showWeatherReport(weather) {
  let city = document.getElementById("city");
  city.innerText = `${weather.name},${weather.sys.country};`;
  let temperature = document.getElementById("temperature");
  temperature.innerHTML = `${Math.round(weather.main.temp) - 273}&deg;C`;

  let minmaxtemp = document.getElementById("min-max");
  minmaxtemp.innerHTML = `${
    Math.floor(weather.main.temp_min) - 273
  }&deg;C(min)/${Math.round(weather.main.temp_max) - 273}&deg;C(max);`;
  let weathertype = document.getElementById("weather");
  weathertype.innerText = `${weather.weather[0].main}`;

  if (weathertype.textContent == "Mist") {
    document.body.style.backgroundImage = "url('/cloud.jfif')";
  }

  if (weathertype.textContent == "Clear") {
    document.body.style.backgroundImage = "url('/cloudy.jfif')";
  }

  if (weathertype.textContent == "Snow") {
    document.body.style.backgroundImage = "url('/snow.jpg')";
  }

  if (weathertype.textContent == "Clouds") {
    document.body.style.backgroundImage = "url('/clou.jpg')";
  }

  if (weathertype.textContent == "Rain") {
    document.body.style.backgroundImage = "url('/rain.jpg')";
  }

  if (weathertype.textContent == "Sunny") {
    document.body.style.backgroundImage = "url('/sunny.jfif')";
  }

  if (weathertype.textContent == "Wind") {
    document.body.style.backgroundImage = "url('/windy.jfif')";
  }
}


