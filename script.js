const key = "5da213236dff1af3152dfcfae5086ec7";
let city = "Bangalore";

render();

function fetchResults() {
  city = document.getElementById("city-country").value;

  document.getElementById("city-country").value = "";
  console.log(city);
  render();
}

function render() {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&appid=" +
      key +
      "&units=metric",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      document.getElementById("city-name").innerHTML = result.name;
      document.getElementById("weather").src =
        "https://openweathermap.org/img/wn/" +
        result.weather[0].icon +
        "@2x.png";
      document.getElementById("w-description").innerHTML =
        "Description: " + result.weather[0].description;
      document.getElementById("degrees").innerHTML =
        "Temperature: " + result.main.temp + " C";
      document.getElementById("feels-like").innerHTML =
        "Feels like: " + result.main.feels_like + " C";
      //update data here
    })
    .catch((error) => console.error(error));
}
