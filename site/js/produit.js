let objectId = "";
let data = {};
const divTextContent = document.createElement('div');
const button = document.createElement('button');
button.setAttribute('class', 'btn btn-dark');
const addcartmsg = document.createElement('div');
addcartmsg.setAttribute('id','successMsg');

document.addEventListener("DOMContentLoaded", function (event) {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    objectId = urlParams.get('id');
    let type = urlParams.get('type');
    let request = new XMLHttpRequest();
    // Récupération du produit grace à son URL
    request.open('GET', "http://localhost:3000/api/" + type + "/" + objectId, true);
    request.onload = function () {
        data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {

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

// Mise en page

function displayProduct(data) {

    const card = document.getElementById('product');

    const row = document.createElement('div');
    row.setAttribute('class', 'row no-gutters');

    const divColImg = document.createElement('div');
    divColImg.setAttribute('class', 'col-md-4 imgProduct');

    const newImg = document.createElement("img");
    newImg.setAttribute('src', data.imageUrl);

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
    let objectHidOpt = document.createElement('option')
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

    const errorMsg = document.createElement('div');
    errorMsg.setAttribute('id','errorMsg');


    card.appendChild(row);
    row.appendChild(divColImg);
    divColImg.appendChild(newImg);
    row.appendChild(divColText);
    divColText.appendChild(divTextContent);
    divTextContent.appendChild(title);
    divTextContent.appendChild(p);
    divTextContent.appendChild(objectSlt);
    divTextContent.appendChild(errorMsg);
    divTextContent.appendChild(newPPrice);
};

// Ajout du produit au panier avec récupération de ses éléments

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

        if (typeof selectedElement == 'undefined' || selectedElement=='Option') {
            document.getElementById('errorMsg').innerHTML = 'Choisissez une option.'
            document.getElementById('successMsg').innerHTML = ''

        } else {
            document.getElementById('errorMsg').innerHTML = '';
            document.getElementById('successMsg').innerHTML = 'Produit ajouté au panier !'

            let actualCart = localStorage.getItem("cart");
            let actualCartInJson = [];
            if (actualCart != null) {
                actualCartInJson = JSON.parse(actualCart);
            }
            let newElement = { id: data._id, name: data.name, price: data.price, image: data.imageUrl, option: selectedElement };
            actualCartInJson.push(newElement);
            localStorage.setItem("cart", JSON.stringify(actualCartInJson));
        }
    });
    divTextContent.appendChild(button);
    divTextContent.appendChild(addcartmsg);
}