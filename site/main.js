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

            //balise a

            
            // const a = document.createElement('a');
            // a.setAttribute("href", "html/produit.html");
            // a.setAttribute("class", "lienProduit");

            // function lienDansImg() {
            //     const img = document.createElement('img')
            //     const imgPlace = document.querySelector(".lienProduit");
            //     img.setAttribute("src", teddy.imageUrl);
            //     imgPlace.appendChild(img);
            // }

            const img = document.createElement('img');
            img.setAttribute("src", teddy.imageUrl);
            img.setAttribute("class", "card-img-top");

            const cardBody = document.createElement('div');
            cardBody.setAttribute("class","card-body");

            const h1 = document.createElement('h1');
            h1.textContent = teddy.name;
            h1.setAttribute('style', 'color: black');
            h1.setAttribute('class', 'productNames card-title');

            const p = document.createElement('p');
            teddy.description = teddy.description.substring(0, 300);
            p.setAttribute("class","card-text");
            p.textContent = teddy.description;

            const button1 = document.createElement('a');
            button1.setAttribute("id", teddy._id);
            button1.setAttribute("class", "showProductbutton btn btn-dark");
            button1.setAttribute("href", 'html/produit.html?id='+teddy._id+'&type=teddies');
            button1.textContent = "Voir le produit";
            button1.addEventListener("click", function (e) {              
               
            });

            const button = document.createElement('button');
            button.setAttribute("id", teddy._id);
            button.setAttribute("value", teddy._id);
            button.setAttribute("class", "addCartButton");
            button.textContent = "Ajouter au panier";
            button.addEventListener("click", function (e) {              
                let actualCart = localStorage.getItem("cart");
                let actualCartInJson=[];
                if (actualCart!=null){  
                     actualCartInJson = JSON.parse(actualCart);
                    //  console.log(actualCartInJson[0].id);
                }
                let newElement = {id: teddy._id, name: teddy.name, price: teddy.price, image: teddy.imageUrl};
                actualCartInJson.push(newElement);
                localStorage.setItem("cart", JSON.stringify(actualCartInJson));
                console.log(actualCartInJson);
            });
            

            container.appendChild(card);
            card.appendChild(img);
            card.appendChild(cardBody);
            // card.appendChild(h1);
            // card.appendChild(a);
            
            cardBody.appendChild(h1);
            cardBody.appendChild(p);
            cardBody.appendChild(button1);
            // card.appendChild(p);
            // card.appendChild(button1)
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
            cardBody.setAttribute("class","card-body");

            const h1 = document.createElement('h1');
            h1.setAttribute('style', 'color: black');
            h1.setAttribute('class', 'productNames card-title');
            h1.textContent = furniture.name;

            const p = document.createElement('p');
            furniture.description = furniture.description.substring(0, 300);
            p.setAttribute("class","card-text");
            p.textContent = furniture.description;

            const button1 = document.createElement('a');
            button1.setAttribute("id", furniture._id);
            button1.setAttribute("class", "showProductbutton btn btn-dark");
            button1.setAttribute("href", 'html/produit.html?id='+furniture._id+'&type=furnitures');
            button1.textContent = "Voir le produit";
            button1.addEventListener("click", function (e) {              
               
            });

            // const button = document.createElement('button');
            // button.setAttribute("value", furniture._id);
            // button.setAttribute("class", "addCartButton");
            // button.textContent = "Ajouter au panier";
            // button.addEventListener("click", function (e) {
            //     let actualCart = localStorage.getItem("cart");
            //     let actualCartInJson=[];
            //     if (actualCart!=null){  
            //          actualCartInJson = JSON.parse(actualCart);
            //         //  console.log(actualCartInJson[0].id);
            //     }
            //     let newElement = {id: furniture._id, name: furniture.name, price: furniture.price, image: furniture.imageUrl};
            //     actualCartInJson.push(newElement);
            //     localStorage.setItem("cart", JSON.stringify(actualCartInJson));
            //     console.log(actualCartInJson);
            // });

            container1.appendChild(card);
            card.appendChild(img);
            card.appendChild(cardBody);

            cardBody.appendChild(h1);
            cardBody.appendChild(p);
            cardBody.appendChild(button1);
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
            cardBody.setAttribute("class","card-body");

            const h1 = document.createElement('h1');
            h1.setAttribute('style', 'color: black');
            h1.setAttribute('class', 'productNames card-title');
            h1.textContent = camera.name;

            const p = document.createElement('p');
            camera.description = camera.description.substring(0, 300);
            p.setAttribute("class","card-text");
            p.textContent = camera.description;

            const button1 = document.createElement('a');
            button1.setAttribute("id", camera._id);
            button1.setAttribute("class", "showProductbutton btn btn-dark");
            button1.setAttribute("href", 'html/produit.html?id='+camera._id+'&type=cameras');
            button1.textContent = "Voir le produit";
            button1.addEventListener("click", function (e) {              
               
            });

            // const button = document.createElement('button');
            // button.setAttribute("value", camera._id);
            // button.setAttribute("class", "addCartButton");
            // button.textContent = "Ajouter au panier";
            // button.addEventListener("click", function (e) {
            //     let actualCart = localStorage.getItem("cart");
            //     let actualCartInJson=[];
            //     if (actualCart!=null){  
            //          actualCartInJson = JSON.parse(actualCart);
            //         //  console.log(actualCartInJson[0].id);
            //     }
            //     let newElement = {id: camera._id, name: camera.name, price: camera.price, image: camera.imageUrl};
            //     actualCartInJson.push(newElement);
            //     localStorage.setItem("cart", JSON.stringify(actualCartInJson));
            //     console.log(actualCartInJson);
            // });

            // container2.appendChild(card);
            // card.appendChild(h1);
            // card.appendChild(img);
            // card.appendChild(p);
            // card.appendChild(button);

            container2.appendChild(card);
            card.appendChild(img);
            card.appendChild(cardBody);

            cardBody.appendChild(h1);
            cardBody.appendChild(p);
            cardBody.appendChild(button1);
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