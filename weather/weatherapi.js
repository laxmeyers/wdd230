// select HTML elements to edit
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?id=5608754&appid=9cec24c89aac32e6ab2ecdb2020dd7d4'

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // this is temporary for development only
  });