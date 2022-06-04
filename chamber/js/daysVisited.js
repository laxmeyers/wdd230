let days = document.querySelector('#visit');

let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
	let date = new Date();
} else {
	days.textContent = `This is your first visit!`;
}

function findDay(date) {
    let difference = localStorage.getItem('visits-ls') - new Date().getTime();
    let totalDays = Math.ceil(difference / (1000 * 3600 * 24))
}

localStorage.setItem("visits-ls", date);