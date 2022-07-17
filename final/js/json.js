const url = "json/temples.json";
fetch(url)
.then (response => response.json())
.then (data => {
    const temples = data['temples']
    temples.forEach(displayTemples);
    console.log(data)
});

function displayTemples(temples){
    let card = document.createElement('section')
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let p5 = document.createElement('p');
    let p6 = document.createElement('p');
    let portrait = document.createElement('img');
    let br = document.createElement('br')

    h2.textContent = `${temples['name']}`;
    p1.textContent = `Address: ${temples['address']}`;
    p2.textContent = `Phone: ${temples['phone']}`;
    p3.textContent = `Services: ${temples['services']}`
    p4.textContent = `Announced: ${temples['announced']}`
    p5.textContent = `Groundbreaking: ${temples['groundbreak']}`
    p6.textContent = `Dedicated: ${temples['dedicated']}`

    portrait.setAttribute('src', temples['image']);
    portrait.setAttribute('alt', `Portrait of ${temples['name']} logo`);
    portrait.setAttribute('loading', 'lazy');

    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(p5);
    card.appendChild(p6);
    card.appendChild(br)


    document.querySelector('#temples').appendChild(card)
}