console.log('produit');

const teddys_div = document.getElementById('teddys');

const container = document.createElement('div');
container.setAttribute('class', 'container');
teddys_div.appendChild(container);

let request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/api/teddies', true);
request.onload = function () {
    let data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        data.forEach((teddy) => {
            
        console.log('request');
        
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const button = document.createElement('button');
            button.setAttribute("value", teddy._id);
            button.setAttribute("class", "addCartButton");
            button.textContent = "Ajouter au panier";
            button.addEventListener("click", function (e) {
                let actualCart = localStorage.getItem("cart");
                let actualCartInJson = [];
                if (actualCart != null) {
                    actualCartInJson = JSON.parse(actualCart);
                    //  console.log(actualCartInJson[0].id);
                }
                let newElement = { id: teddy._id, name: teddy.name, price: teddy.price, image: teddy.imageUrl };
                actualCartInJson.push(newElement);
                localStorage.setItem("cart", JSON.stringify(actualCartInJson));
                console.log(actualCartInJson);
            });

            card.appendChild(button);
        });
    } else {
        const errorMessage = document.createElement('marquee');
        errorMessage.textContent = "It's not working !";
        teddys_div.appendChild(errorMessage);
    };
};

request.send();