let days = document.querySelector('#visited');

const current = Date.now();

let numVisits;

if (window.localStorage.getItem("visits-ls")) {
	numVisits = window.localStorage.getItem('visits-ls');
} else {
	numVisits = current;
}

window.localStorage.setItem('visits-ls', current)

const second = Math.floor((current - numVisits) / 1000);
const lastDay = Math.floor(second / 86400);
console.log(lastDay)
days.textContent = lastDay;