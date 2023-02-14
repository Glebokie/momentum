function weather() {
    const weatherIcon = document.querySelector('.weather-icon');
    const temperature = document.querySelector('.temperature');
    const weatherDescription = document.querySelector('.weather-description');
    const weatherWind = document.querySelector('.wind');
    const humidity = document.querySelector('.humidity');
    const city = document.querySelector('.city');
    async function getWeather() {  
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=2a035a4d8b17a39f0ba444cbda68e9d6&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.floor(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        weatherWind.textContent = `Wind speed: ${Math.floor(data.wind.speed)} m/s`;
        humidity.textContent = `Humidity: ${Math.floor(data.main.humidity)} %`;
        }
        getWeather()
    
    city.addEventListener('change', getWeather)

    function saveWeather() {
        function setLocalStorage() {
            localStorage.setItem('text', city.value);
          }
          window.addEventListener('beforeunload', setLocalStorage)
        
          function getLocalStorage() {
            if(localStorage.getItem('text')) {
              city.value = localStorage.getItem('text');
            }
          }
          window.addEventListener('load', getLocalStorage)
        }
        saveWeather()
  }

  export default weather;