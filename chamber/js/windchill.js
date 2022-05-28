let windSpeed = document.querySelector('#wind-speed').textContent;
let temp = document.querySelector('#temp').textContent;

let limits = -1;


if (temp <= 50 && windSpeed > 3){
    limits = 0;
} else {
    limits = 1;
}

console.log(limits)

if (limits == 1){
    document.querySelector('#wind-chill').textContent = 'N/A';

} else{
    let num = 35.74 + (0.6215 * temp) - 35.75 * (windSpeed ** 0.16) + (0.4275 * temp * (windSpeed ** 0.16));
    document.querySelector('#wind-chill').textContent = num.toFixed(2)
}