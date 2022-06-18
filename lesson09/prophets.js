const url = "https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json";
fetch(url)
.then (response => response.json())
.then (data => {
    const prophets = data['prophets']
    prophets.forEach(displayProphets);
    console.log(data["prophets"])
});

function displayProphets(prophet){
    let card = document.createElement('section')
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let portrait = document.createElement('img');

    h2.textContent = `${prophet['name']} ${prophet['lastname']}`;
    p1.textContent = `Birth date: ${prophet['birthdate']}`;
    p2.textContent = `birth place: ${prophet['birthplace']}`;

    portrait.setAttribute('src', prophet['imageurl']);
    portrait.setAttribute('alt', `Portrait of ${prophet['name']} ${prophet['lastname']}`);
    portrait.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(portrait);

    document.querySelector('.cards').appendChild(card)
}