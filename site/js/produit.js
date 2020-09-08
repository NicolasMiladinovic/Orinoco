let objectId = "";
let data = {};

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
    };
    request.send();
});

function displayProduct(data) {

    const newImg = document.createElement("img");
    console.log(data.imageUrl);
    newImg.setAttribute('src', data.imageUrl);
    newImg.setAttribute('id', 'divImg');

    const card = document.getElementById('cart');

    const subCard = document.createElement('div');
    // const img = document.createElement('img');
    // img.setAttribute("src", data.imageUrl);
    // img.setAttribute("class", "");

    // const p = document.createElement('p');
    // data.description = data.description.substring(0, 300);
    // p.setAttribute("class", "card-text");
    // p.textContent = data.description;

    subCard.appendChild(newImg);
    card.appendChild(subCard);
    // card.appendChild(p);

};

// EN COURS

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
    let newElement = { id: objectId, name: teddy.name, price: teddy.price, image: teddy.imageUrl };
    actualCartInJson.push(newElement);
    localStorage.setItem("cart", JSON.stringify(actualCartInJson));
    console.log(actualCartInJson);
});

