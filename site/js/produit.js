let objectId = "";
let data = {};
// let objectOpt = document.createElement('option');

document.addEventListener("DOMContentLoaded", function (event) {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    objectId = urlParams.get('id');
    let type = urlParams.get('type');
    console.log("je cherche " + objectId + ' de type ' + type);
    // ajaxGet("http://localhost:3000/api/" + type + "/" + objectId, displayObject);
    let request = new XMLHttpRequest();
    request.open('GET', "http://localhost:3000/api/" + type + "/" + objectId, true);
    request.onload = function () {
        data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            console.log(data);
        } else {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = "It's not working !";
            teddys_div.appendChild(errorMessage);
        };
        console.log(data.name);
        displayProduct(data);
        displayAddCart(data);
    };
    request.send();
});

function displayProduct(data) {

    const title = document.createElement('h1');
    title.textContent = data.name;
    title.setAttribute('id','titleProduct');
    title.setAttribute('style', 'color: black');

    const newImg = document.createElement("img");
    console.log(data.imageUrl);
    newImg.setAttribute('src', data.imageUrl);
    newImg.setAttribute('id', 'divImg');


    let objectSlt = document.createElement('select')
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let type = urlParams.get('type');
    if (type === 'teddies') {
        data.colors.forEach(function (color) {
            let objectOpt = document.createElement('option');
            objectOpt.textContent = color;
            objectSlt.appendChild(objectOpt);
        });
    } else if (type === 'furniture') {
        data.varnish.forEach(function (vernis) {
            let objectOpt = document.createElement('option');
            objectOpt.textContent = vernis;
            objectSlt.appendChild(objectOpt);
        });
    } else if (type === 'cameras') {
        data.lenses.forEach(function (lentille) {
            let objectOpt = document.createElement('option');
            objectOpt.textContent = lentille;
            objectSlt.appendChild(objectOpt);
        });
    };



    const card = document.getElementById('cart');

    const subCard = document.createElement('div');

    const p = document.createElement('p');
    data.description = data.description.substring(0, 300);
    p.setAttribute("class", "card-text");
    p.textContent = data.description;

    const newDivPrice = document.createElement('div');
    newDivPrice.textContent = data.price;
    newDivPrice.setAttribute('id', 'divPrice');

    subCard.appendChild(title);
    subCard.appendChild(newImg);
    subCard.appendChild(objectSlt);
    subCard.appendChild(p);
    subCard.appendChild(newDivPrice);

    card.appendChild(subCard);


};



function displayAddCart(data) {
    const card = document.getElementById('cart');
    const button = document.createElement('button');
    button.setAttribute("id", objectId);
    button.setAttribute("value", objectId);
    button.setAttribute("class", "addCartButton");
    button.textContent = "Ajouter au panier";
    button.addEventListener("click", function (e) {
        let actualCart = localStorage.getItem("cart");
        let actualCartInJson = [];
        if (actualCart != null) {
            actualCartInJson = JSON.parse(actualCart);
            //  console.log(actualCartInJson[0].id);
        }
        let newElement = { id: data._id, name: data.name, price: data.price, image: data.imageUrl };
        actualCartInJson.push(newElement);
        localStorage.setItem("cart", JSON.stringify(actualCartInJson));
        console.log(actualCartInJson);
    });

    card.appendChild(button);
}