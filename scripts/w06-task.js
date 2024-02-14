/* W06: Programming Tasks */

document.getElementById('searchButton').addEventListener('click', () => {
  const location = document.getElementById('locationInput').value;
  fetchWeatherData(location);
  fetchForecastData(location);
});

async function fetchWeatherData(location) {
  const apiKey = '25d10da9fbfbd4e19d33de922a5a7900';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error('Weather data not found');
      }
      const data = await response.json();
      displayWeatherData(data);
  } catch (error) {
      console.error('Error fetching weather data:', error);
      document.getElementById('weatherDisplay').innerText = 'Failed to retrieve weather data';
  }
}

function displayWeatherData(data) {
  const weatherHTML = `
      <h2>Weather in ${data.name}</h2>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Wind Speed: ${data.wind.speed} km/h</p>
      <p>Weather Conditions: ${data.weather[0].main}</p>
  `;
  document.getElementById('weatherDisplay').innerHTML = weatherHTML;
}

async function fetchForecastData(location) {
  const apiKey = '25d10da9fbfbd4e19d33de922a5a7900';
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric`;

  try {
      const response = await fetch(url);
      if (!response.ok) {
          throw new Error('Forecast data not found');
      }
      const forecastData = await response.json();
      displayForecastData(forecastData);
  } catch (error) {
      console.error('Error fetching forecast data:', error);
  }
}

function displayForecastData(forecastData) {
  const dailyForecasts = forecastData.list.filter(forecast => {
      const forecastHour = new Date(forecast.dt_txt).getHours();
      return forecastHour === 12;
  });

  const forecastHTML = dailyForecasts.map(forecast => `
      <div class="forecast">
          <p>Date: ${new Date(forecast.dt * 1000).toLocaleDateString()}</p>
          <p>Temp: ${forecast.main.temp}°C</p>
          <p>Weather: ${forecast.weather[0].main}</p>
      </div>
  `).join('');

  document.getElementById('forecastDisplay').innerHTML = forecastHTML;
}
