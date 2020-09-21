const teddys_div = document.getElementById('teddys');
const furnitures_div = document.getElementById('furnitures');
const cameras_div = document.getElementById('cameras');

const container = document.createElement('div');
container.setAttribute('class', 'container row');
teddys_div.appendChild(container);

let request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/api/teddies', true);
request.onload = function () {
    let data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.forEach((teddy) => {

            const card = document.createElement('div');
            card.setAttribute('class', 'card col');

            const img = document.createElement('img');
            img.setAttribute("src", teddy.imageUrl);
            img.setAttribute("class", "card-img-top");

            const cardBody = document.createElement('div');
            cardBody.setAttribute("class", "card-body");

            const h1 = document.createElement('h1');
            h1.textContent = teddy.name;
            h1.setAttribute('style', 'color: black');
            h1.setAttribute('class', 'productNames card-title');

            const p = document.createElement('p');
            teddy.description = teddy.description.substring(0, 300);
            p.setAttribute("class", "card-text");
            p.textContent = teddy.description;

            const pPrice = document.createElement('p');
            pPrice.textContent = teddy.price/100 + " €";

            const button1 = document.createElement('a');
            button1.setAttribute("id", teddy._id);
            button1.setAttribute("class", "showProductbutton btn btn-dark");
            button1.setAttribute("href", 'html/produit.html?id=' + teddy._id + '&type=teddies');
            button1.textContent = "Voir le produit";
            button1.addEventListener("click", function (e) {

            });

            container.appendChild(card);
            card.appendChild(img);
            card.appendChild(cardBody);

            cardBody.appendChild(h1);
            cardBody.appendChild(p);
            cardBody.appendChild(pPrice);
            card.appendChild(button1)
        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = "It's not working !";
        teddys_div.appendChild(errorMessage);
    };
};


// Appel de l'api furniture

const container1 = document.createElement('div');
container1.setAttribute('class', 'container row');
furnitures_div.appendChild(container1);

let request1 = new XMLHttpRequest();
request1.open('GET', 'http://localhost:3000/api/furniture', true);
request1.onload = function () {
    let data = JSON.parse(this.response);
    if (request1.status >= 200 && request1.status < 400) {
        data.forEach((furniture) => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card col');

            const img = document.createElement('img');
            img.setAttribute("src", furniture.imageUrl);
            img.setAttribute("class", "card-img-top");

            const cardBody = document.createElement('div');
            cardBody.setAttribute("class", "card-body");

            const h1 = document.createElement('h1');
            h1.setAttribute('style', 'color: black');
            h1.setAttribute('class', 'productNames card-title');
            h1.textContent = furniture.name;

            const p = document.createElement('p');
            furniture.description = furniture.description.substring(0, 300);
            p.setAttribute("class", "card-text");
            p.textContent = furniture.description;

            const pPrice = document.createElement('p');
            pPrice.textContent = furniture.price/100 + " €";

            const button1 = document.createElement('a');
            button1.setAttribute("id", furniture._id);
            button1.setAttribute("class", "showProductbutton btn btn-dark");
            button1.setAttribute("href", 'html/produit.html?id=' + furniture._id + '&type=furniture');
            button1.textContent = "Voir le produit";
            button1.addEventListener("click", function (e) {

            });

            container1.appendChild(card);
            card.appendChild(img);
            card.appendChild(cardBody);
            card.appendChild(button1)

            cardBody.appendChild(h1);
            cardBody.appendChild(p);
            cardBody.appendChild(pPrice);
            // cardBody.appendChild(button1);
        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = "It's not working !";
        furnitures_div.appendChild(errorMessage);
    };
};

const container2 = document.createElement('div');
container2.setAttribute('class', 'container row');
cameras_div.appendChild(container2);

let request2 = new XMLHttpRequest();
request2.open('GET', 'http://localhost:3000/api/cameras', true);
request2.onload = function () {
    let data = JSON.parse(this.response);
    if (request2.status >= 200 && request2.status < 400) {
        data.forEach((camera) => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card col');

            const img = document.createElement('img');
            img.setAttribute("src", camera.imageUrl);
            img.setAttribute("class", "card-img-top");

            const cardBody = document.createElement('div');
            cardBody.setAttribute("class", "card-body");

            const h1 = document.createElement('h1');
            h1.setAttribute('style', 'color: black');
            h1.setAttribute('class', 'productNames card-title');
            h1.textContent = camera.name;

            const p = document.createElement('p');
            camera.description = camera.description.substring(0, 300);
            p.setAttribute("class", "card-text");
            p.textContent = camera.description;

            const pPrice = document.createElement('p');
            pPrice.textContent = camera.price + " €";

            const button1 = document.createElement('a');
            button1.setAttribute("id", camera._id);
            button1.setAttribute("class", "showProductbutton btn btn-dark");
            button1.setAttribute("href", 'html/produit.html?id=' + camera._id + '&type=cameras');
            button1.textContent = "Voir le produit";
            button1.addEventListener("click", function (e) {

            });


            container2.appendChild(card);
            card.appendChild(img);
            card.appendChild(cardBody);
            card.appendChild(button1)

            cardBody.appendChild(h1);
            cardBody.appendChild(p);
            cardBody.appendChild(pPrice);
        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = "It's not working !";
        cameras_div.appendChild(errorMessage);
    };
};


request.send();
request1.send();
request2.send();