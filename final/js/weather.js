const url = 'https://api.openweathermap.org/data/2.5/weather?zip=83669&appid=9cec24c89aac32e6ab2ecdb2020dd7d4&units=imperial'

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        let temp = data['main']['temp'];
        let humid = data['main']['humidity'];
        let desc = data['weather']['0']['description'];

        document.querySelector('#temp').textContent = Math.round(temp);
        document.querySelector('#humid').textContent = Math.round(humid);
        document.querySelector('#description').textContent = desc;
    });

const url2 = 'https://api.openweathermap.org/data/2.5/weather?zip=60007&appid=9cec24c89aac32e6ab2ecdb2020dd7d4&units=imperial'

fetch(url2)
    .then((response) => response.json())
    .then((data) => {
        let temp = data['main']['temp'];
        let humid = data['main']['humidity'];
        let desc = data['weather']['0']['description'];

        document.querySelector('#temp2').textContent = Math.round(temp);
        document.querySelector('#humid2').textContent = Math.round(humid);
        document.querySelector('#description2').textContent = desc;
    });