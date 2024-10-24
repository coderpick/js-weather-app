const apiKey = "176afe3be36e44a82996773adf61362d"; // Replace with your OpenWeatherMap API key

// function getWeather() {
//   const city = document.getElementById('city').value;
//   if (city === '') {
//     alert('Please enter a city name');
//     return;
//   }

//   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//   fetch(apiUrl)
//     .then((response) => response.json())
//     .then((data) => {
//       displayWeather(data);
//     })
//     .catch((error) => {
//       console.error('Error fetching weather data:', error);
//       alert('City not found or there was an error fetching data.');
//     });
// }
// function displayWeather(data) {
//   const weatherInfo = document.getElementById('weatherInfo');
//   if (data.cod === '404') {
//     weatherInfo.innerHTML = '<p>City not found. Please try again.</p>';
//     return;
//   }

//   const weatherHtml = `
//     <p><strong>${data.name}, ${data.sys.country}</strong></p>
//     <p>Temperature: ${data.main.temp}°C</p>
//     <p>Weather: ${data.weather[0].description}</p>
//     <p>Humidity: ${data.main.humidity}%</p>
//   `;
//   weatherInfo.innerHTML = weatherHtml;
// }

/* async await example */
//const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

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
  if (data.cod === "404") {
    weatherInfo.innerHTML = "<p>City not found. Please try again.</p>";
    return;
  }

  const weatherHtml = `
    <p><strong>${data.name}, ${data.sys.country}</strong></p>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Weather: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity}%</p>
  `;

  weatherInfo.innerHTML = weatherHtml;
}
