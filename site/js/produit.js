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
        displayAddCart(data);
    };
    request.send();
});

function displayProduct(data) {

    const newImg = document.createElement("img");
    console.log(data.imageUrl);
    newImg.setAttribute('src', data.imageUrl);
    newImg.setAttribute('id', 'divImg');

    console.log(data.colors);
    // let objectColors = data.colors;
    // const newColorSelector = document.createElement("select");
    // console.log(objectColors);
    // {
    //     let tabColor = objectColors.pop();
    //     let opt = new Option(tabColor, tabColor);
    //     newColorSelector.options[newColorSelector.options.length] = opt;
    // }
    // newColorSelector.setAttribute('id', 'idSelector');

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
    }else if (type === 'cameras'){
        data.lenses.forEach(function (lentille) {
            let objectOpt =document.createElement('option');
            objectOpt.textContent = lentille;
            objectSlt.appendChild(objectOpt);
        });
    }else if (type === 'furniture'){
        data.varnish.forEach(function (vernis) {
            let objectOpt = document.createElement('option');
            objectOpt.textContent = vernis;
            objectSlt.appendChild(objectOpt);
        });
    };
    


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
    subCard.appendChild(objectSlt);
    // subCard.appendChild(newColorSelector);
    card.appendChild(subCard);
    // card.appendChild(p);

};

// EN COURS

// const button = document.createElement('button');
// button.setAttribute("id", objectId);
// button.setAttribute("value", objectId);
// button.setAttribute("class", "addCartButton");
// button.textContent = "Ajouter au panier";
// button.addEventListener("click", function (e) {
//     let actualCart = localStorage.getItem("cart");
//     let actualCartInJson = [];
//     if (actualCart != null) {
//         actualCartInJson = JSON.parse(actualCart);
//         //  console.log(actualCartInJson[0].id);
//     }
//     let newElement = { id: objectId, name: teddy.name, price: teddy.price, image: teddy.imageUrl };
//     actualCartInJson.push(newElement);
//     localStorage.setItem("cart", JSON.stringify(actualCartInJson));
//     console.log(actualCartInJson);
// });


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