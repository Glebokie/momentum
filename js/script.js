"use strict"

////// Time/date and greeting
function showTime() {
const timeEl = document.querySelector('.time');
const date = new Date();
const currentTime = date.toLocaleTimeString();
timeEl.textContent = currentTime;
setTimeout(showTime, 1000);
    function showDate() {
        const dateEl = document.querySelector('.date')
        const date = new Date();
        const options = {weekday:'long', month: 'long', day: 'numeric', timeZone: 'UTC',};
        const currentDate = date.toLocaleDateString('en-Br', options);
        dateEl.textContent = currentDate;
    }
    showDate() 

    function showGreeting() {
        const greetingEl = document.querySelector('.greeting')
        const date = new Date();
        const hours = date.getHours();
        function getTimeOfDay() {
        if(hours >= 0) {
            greetingEl.textContent = 'Good night';
        } if(hours >= 6) {
            greetingEl.textContent = 'Good morning';
        } if(hours >= 12) {
            greetingEl.textContent = 'Good afternoon';
        } if(hours >= 18) {
            greetingEl.textContent = 'Good evening';
        }
        }
        getTimeOfDay()
    }
    showGreeting()
    
}
showTime();
//////////////// save name in grating input
function saveName() {
const nameEl = document.querySelector('.name');
function setLocalStorage() {
    localStorage.setItem('name', nameEl.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    if(localStorage.getItem('name')) {
      nameEl.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage)
}
saveName()
////////////// background body
function bodySlider() {
    const bodyEl = document.querySelector('body')
    let randomNum ;
    let bgNum;
    const slideNextEl = document.querySelector('.slide-next')
    const slidePrevEl = document.querySelector('.slide-prev')
    function getRandomNum (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNum
      }
   
    let setBg = () => {  
        bgNum = getRandomNum(1, 20)
        bgNum = String(bgNum);
        bgNum = bgNum.padStart(2,'0')
        let greetingEl = document.querySelector('.greeting')
        let timeOfDay = greetingEl.textContent.split(' ').splice(1,1).join(' ');
        const img = new Image();
        img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
        img.onload = () => {      
          bodyEl.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`
        }; 
        }
        setBg()

        function getSlideNext() {
            randomNum++
            if(randomNum > 20) {
            randomNum = 1
            }
            setBg()
        }
        function getSlidePrev() {
            randomNum--
            if(randomNum < 1) {
            randomNum = 20
            }
            setBg()
        }
        slideNextEl.addEventListener('click', getSlideNext)
        slidePrevEl.addEventListener('click', getSlidePrev)
}

bodySlider()

//////////// Weather 

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

  weather()

  //////////Quotes 
