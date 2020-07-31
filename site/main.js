const teddys_div = document.getElementById('teddys');
const furnitures_div = document.getElementById('furnitures');
const cameras_div = document.getElementById('cameras');

const container = document.createElement('div');
container.setAttribute('class', 'container');
teddys_div.appendChild(container);

let request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/api/teddies', true);
request.onload = function () {
    let data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
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

            const button = document.createElement('button');
            button.setAttribute("value", teddy._id);
            button.setAttribute("class", "addCartButton");
            button.textContent = "Ajouter au panier";
            button.addEventListener("click", function (e) {
                // console.log(e);
                let cart = e.target.value;
                console.log(cart);
                window.localStorage.setItem('cart', '"[{ Id = " + teddy._id + "name = "+ teddy.name "}]"');

            });
            

            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(img);
            card.appendChild(p);
            card.appendChild(button);
        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = "It's not working !";
        teddys_div.appendChild(errorMessage);
    };
};


// Appel de l'api furniture

const container1 = document.createElement('div');
container1.setAttribute('class', 'container');
furnitures_div.appendChild(container1);

let request1 = new XMLHttpRequest();
request1.open('GET', 'http://localhost:3000/api/furniture', true);
request1.onload = function () {
    let data = JSON.parse(this.response);
    if (request1.status >= 200 && request1.status < 400) {
        data.forEach((furniture) => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h1 = document.createElement('h1');
            h1.textContent = furniture.name;

            const img = document.createElement('img');
            img.setAttribute("src", furniture.imageUrl);

            const p = document.createElement('p');
            furniture.description = furniture.description.substring(0, 300);
            p.textContent = furniture.description;

            const button = document.createElement('button');
            button.setAttribute("value", furniture._id);
            button.setAttribute("class", "addCartButton");
            button.textContent = "Ajouter au panier";
            button.addEventListener("click", function (e) {
                console.log(e);
            });

            container1.appendChild(card);
            card.appendChild(h1);
            card.appendChild(img);
            card.appendChild(p);
            card.appendChild(button);
        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = "It's not working !";
        furnitures_div.appendChild(errorMessage);
    };
};

const container2 = document.createElement('div');
container2.setAttribute('class', 'container');
cameras_div.appendChild(container2);

let request2 = new XMLHttpRequest();
request2.open('GET', 'http://localhost:3000/api/cameras', true);
request2.onload = function () {
    let data = JSON.parse(this.response);
    if (request2.status >= 200 && request2.status < 400) {
        data.forEach((camera) => {
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h1 = document.createElement('h1');
            h1.textContent = camera.name;

            const img = document.createElement('img');
            img.setAttribute("src", camera.imageUrl);

            const p = document.createElement('p');
            camera.description = camera.description.substring(0, 300);
            p.textContent = camera.description;

            const button = document.createElement('button');
            button.setAttribute("value", camera._id);
            button.setAttribute("class", "addCartButton");
            button.textContent = "Ajouter au panier";
            button.addEventListener("click", function (e) {
                console.log(e);
            });

            container2.appendChild(card);
            card.appendChild(h1);
            card.appendChild(img);
            card.appendChild(p);
            card.appendChild(button);
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