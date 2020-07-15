console.log("test");

const teddys_div = document.getElementById('teddys');
const furnitures_div = document.getElementById('furnitures');
const cameras_div = document.getElementById('cameras');

const container = document.createElement('div');
container.setAttribute('class', 'container');
teddys_div.appendChild(container);

let request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/api/teddies', true);
request.onload = function() {
    let data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        console.log("test");
        data.forEach((teddy) => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h1 = document.createElement('h1');
            h1.textContent = teddy.name;

            const img = document.createElement('img');
            img.setAttribute("src", teddy.imageUrl);

            const p = document.createElement('p');
            teddy.description = teddy.description.substring(0, 300);
            p.textContent = teddy.description;

            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(img);
            card.appendChild(p);
        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = "It's not working !";
        teddys_div.appendChild(errorMessage);        
    };
};

request.send();