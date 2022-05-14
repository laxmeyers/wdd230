const hamburg = document.querySelector('.ham');
const mainNav = document.querySelector('.navigation');

hamburg.addEventListener('click', () => 
{mainNav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainNav.classList.remove('responsive')};

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const date = new Date();
let day = weekday[date.getDay()];

const d = new Date();
let newName = month[d.getMonth()];

document.querySelector('#day').textContent = day;

document.querySelector("#date").textContent = `${newName} ${date.getDay()} ${date.getFullYear()}`;