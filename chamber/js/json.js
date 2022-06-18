const url = "json/data.json";
fetch(url)
.then (response => response.json())
.then (data => {
    const businesses = data['business']
    businesses.forEach(displayBusinesses);
    console.log(data)
});

function displayBusinesses(business){
    let card = document.createElement('section')
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let portrait = document.createElement('img');

    h2.textContent = `${business['name']}`;
    p1.textContent = `Email: ${business['email']}`;
    p2.textContent = `Phone: ${business['phone']}`;

    portrait.setAttribute('src', business['image']);
    portrait.setAttribute('alt', `Portrait of ${business['name']} logo`);
    portrait.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(portrait);

    document.querySelector('#cards').appendChild(card)
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
