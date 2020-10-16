let objectId = "";
let data = {};
const divTextContent = document.createElement('div');
const button = document.createElement('button');
button.setAttribute('class', 'btn btn-dark');

document.addEventListener("DOMContentLoaded", function (event) {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    objectId = urlParams.get('id');
    let type = urlParams.get('type');
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
        displayProduct(data);
        displayAddCart(data);
    };
    request.send();
});

function displayProduct(data) {

    const card = document.getElementById('product');

    const row = document.createElement('div');
    row.setAttribute('class', 'row no-gutters');

    const divColImg = document.createElement('div');
    divColImg.setAttribute('class', 'col-md-4');

    const newImg = document.createElement("img");
    newImg.setAttribute('src', data.imageUrl);
    newImg.setAttribute('id', 'imgProduct')

    const divColText = document.createElement('div');
    divColText.setAttribute('class', 'col-md-8 contentTextProduct');


    divTextContent.setAttribute('class', 'card-body');

    const title = document.createElement('h5');
    title.textContent = data.name;
    title.setAttribute('class', 'card-title');

    const p = document.createElement('p');
    data.description = data.description.substring(0, 300);
    p.setAttribute("class", "card-text");
    p.textContent = data.description;

    const newPPrice = document.createElement('p');
    newPPrice.textContent = data.price / 100 + " €";
    newPPrice.setAttribute('class', 'card-text');
    newPPrice.setAttribute('id', 'price');


    let objectSlt = document.createElement('select')
    objectSlt.setAttribute('id', 'selection');
    objectSlt.setAttribute('class', 'card-select');
    // let objectFirstElem = document.createComment('option');
    // objectFirstElem.textContent = "test";
    let objectHidOpt = document.createElement('option')
    objectHidOpt.setAttribute('hidden', '')
    objectHidOpt.textContent = "Option"
    objectSlt.appendChild(objectHidOpt)

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

    card.appendChild(row);
    row.appendChild(divColImg);
    divColImg.appendChild(newImg);
    row.appendChild(divColText);
    divColText.appendChild(divTextContent);
    divTextContent.appendChild(title);
    divTextContent.appendChild(p);
    objectSlt.appendChild(objectHidOpt);
    divTextContent.appendChild(objectSlt);
    divTextContent.appendChild(newPPrice);
};



function displayAddCart(data) {

    const selectBox = document.getElementById('selection');
    let selectedElement;

    selectBox.addEventListener('change', (event) => {
        selectedElement = event.target.value;
    });

    button.setAttribute("id", objectId);
    button.setAttribute("value", objectId);
    button.setAttribute("class", "addCartButton btn btn-success");
    button.textContent = "Ajouter au panier";

        button.addEventListener("click", function (e) {
            let actualCart = localStorage.getItem("cart");
            let actualCartInJson = [];
            if (actualCart != null) {
                actualCartInJson = JSON.parse(actualCart);
            }
            let newElement = { id: data._id, name: data.name, price: data.price, image: data.imageUrl, option: selectedElement };
            actualCartInJson.push(newElement);
            localStorage.setItem("cart", JSON.stringify(actualCartInJson));
            console.log(actualCartInJson);
        });
    divTextContent.appendChild(button)
}