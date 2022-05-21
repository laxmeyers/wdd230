const hamburg = document.querySelector('.ham');
const mainNav = document.querySelector('.navigation');

hamburg.addEventListener('click', () => 
{mainNav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainNav.classList.remove('responsive')};

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let date = new Date();
let day = weekday[date.getDay()];

const d = new Date();
let newName = month[d.getMonth()];

document.querySelector('#day').textContent = day;

document.querySelector("#date").textContent = `${newName} ${date.getDate()} ${date.getFullYear()}`;

function dayOfWeek(){
    document.querySelector('#banner').textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}

console.log(date)

if (date == 1 || date == 2) {
    dayOfWeek();
} else {
    document.querySelector('#banner').style.display='none';
}