displayAllCart();

function displayAllCart() {

    let cartContent = localStorage.getItem('cart');
    let itemList = JSON.parse(cartContent);

    let removeButton;

    let totalPrice = 0;

    let panier = document.getElementById('produit');

    itemList.forEach((item) => {
        // console.log(item.id + ' ' + item.name + ' ' + item.price)

        let newProduct = document.createElement('div');
        newProduct.setAttribute('class', 'newProduct');

        removeButton = document.createElement('button');
        removeButton.setAttribute('type', 'button');
        removeButton.setAttribute('class', 'close');
        removeButton.setAttribute('aria-label', 'Close');

        let optionRemoveButton = document.createElement('span');
        optionRemoveButton.setAttribute('aria-hidden', 'true');
        optionRemoveButton.textContent = 'x';


        removeButton.addEventListener('click', function () {
            let mycart = JSON.parse(localStorage.getItem('cart'));

            let index = mycart.map(function (e) {
                return e.id;
            }
            ).indexOf(item.id);

            // On supprime l'élément
            mycart.splice(index, 1);


            //////////////////////////////////////////////////////////
            // Similaire aux lignes précédentes mais moins optimisé //
            //////////////////////////////////////////////////////////

            // // On crée un tableau avec les id des items du panier
            // let idArray = [];
            // mycart.forEach(function (currentItem) {
            //     idArray.push(currentItem.id)
            // })
            // // console.log(idArray)

            // // On cherche l'index de l'objet à supprimer du panier
            // let index = idArray.indexOf(clickedId);
            // // console.log(index);

      

            localStorage.setItem('cart', JSON.stringify(mycart));
            panier.innerHTML = "";
            displayAllCart();
        });

        const newImg = document.createElement("img");
        newImg.setAttribute('src', item.image);
        newImg.setAttribute('id', 'divImg');

        let newDivName = document.createElement('div');
        newDivName.textContent = item.name;
        newDivName.setAttribute('id', 'divName');

        let newDivPrice = document.createElement('div');
        newDivPrice.textContent = item.price;
        totalPrice += item.price;
        newDivPrice.setAttribute('id', 'divPrice');


        removeButton.appendChild(optionRemoveButton);

        newProduct.appendChild(removeButton);
        newProduct.appendChild(newImg);
        newProduct.appendChild(newDivName);
        newProduct.appendChild(newDivPrice);

        panier.appendChild(newProduct);


    });

    document.getElementById('totalPrice').innerHTML = totalPrice;
}


/////////////////////////
// Forme requête POST //
///////////////////////

// var request = new XMLHttpRequest();
// request.open("POST", '/server', true);

// //Envoie les informations du header adaptées avec la requête
// request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

// request.onreadystatechange = function() { //Appelle une fonction au changement d'état.
//     if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
// // Requête finie, traitement ici.
//     }
// }
// request.send("foo=bar&lorem=ipsum");
// // request.send(new Int8Array()); 
// // request.send(document);



// var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
// var theUrl = "/json-handler";
// xmlhttp.open("POST", theUrl);
// xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
// xmlhttp.send(JSON.stringify({ "email": "hello@user.com", "response": { "name": "Tester" } }));

let bodyJson = {
    contact : {
        firstName : "",
        lastName : "",
        address : "",
        city : "",
        email : ""
    },
    product : []
};


let btnCommand = document.getElementById('btnCommand');

btnCommand.addEventListener('click', function () {
    let name = document.getElementById('name').value;
    // let inputByIndex = inputs[2];
    // console.log(inputByIndex);
    console.log(name);

    bodyJson.contact.firstName = document.getElementById('firstname').value;
});