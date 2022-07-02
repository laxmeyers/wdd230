const json = "json/data.json";
fetch(json)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        const businesses = data['business']
            businesses.forEach(displaySpotlights);
    });


function displaySpotlights(business) {
    
    if (business['membership'] == 'gold') {
        console.log(business.membership)
        let card = document.createElement('div');
        let title = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');

        title.textContent = `${business['name']}`;
        p1.textContent = `Email: ${business['email']}`;
        p2.textContent = `Phone: ${business['phone']}`;

        img.setAttribute('src', business['image']);
        img.setAttribute('alt', `Img of ${business['name']} logo`);
        img.setAttribute('loading', 'lazy');
        img.style.width = '50%';
        img.style.height = 'auto';

        card.appendChild(title);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(img);

        document.querySelector('.spotlight').appendChild(card)
    }
}