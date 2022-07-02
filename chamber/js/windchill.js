const url = 'https://api.openweathermap.org/data/2.5/weather?id=5608754&appid=9cec24c89aac32e6ab2ecdb2020dd7d4&units=imperial'

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let temp = data['main']['temp'];
    let windspeed = data['wind']['speed'];

    document.querySelector('#wind-speed').textContent = windspeed;
    document.querySelector('#temp').textContent = Math.round(temp);
  });


let windSpeed = document.querySelector('#wind-speed').textContent;
let temp = document.querySelector('#temp').textContent;

let limits = -1;


if (temp <= 50 && windSpeed > 3){
    limits = 0;
} else {
    limits = 1;
}

if (limits == 1){
    document.querySelector('#wind-chill').textContent = 'N/A';

} else{
    let num = 35.74 + (0.6215 * temp) - 35.75 * (windSpeed ** 0.16) + (0.4275 * temp * (windSpeed ** 0.16));
    document.querySelector('#wind-chill').textContent = num.toFixed(2)
}