const apiKey = "176afe3be36e44a82996773adf61362d"; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("city").value;
  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("City not found or there was an error fetching data.");
  }
}

function displayWeather(data) {
  const weatherInfo = document.getElementById("weatherInfo");
  const temp = data.main.temp;

  // Select a weather image based on temperature
  let weatherImage;
  if (temp <= 10) {
    weatherImage = "cold.png"; // Cold weather image
    document.body.style.background =
      "url('cold-bg.jpg') no-repeat center center fixed";
  } else if (temp > 10 && temp <= 25) {
    weatherImage = "moderate.png"; // Moderate weather image
    document.body.style.background =
      "url('moderate-bg.jpg') no-repeat center center fixed";
  } else {
    weatherImage = "hot.png"; // Hot weather image
    document.body.style.background =
      "url('hot-bg.jpg') no-repeat center center fixed";
  }

  document.body.style.backgroundSize = "cover";

  const weatherHtml = `
    <p><strong>${data.name}, ${data.sys.country}</strong></p>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <img src="${weatherImage}" alt="Weather icon" class="weather-img">
  `;

  weatherInfo.innerHTML = weatherHtml;
}
