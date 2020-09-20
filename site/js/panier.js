function displayAllCart() {
    let cartContent = localStorage.getItem('cart');
    let itemList = JSON.parse(cartContent);
    let removeButton;
    let totalPrice = 0;
    let panier = document.getElementById('produit');

    itemList.forEach((item) => {

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

function sendCommand() {

    let bodyJson = {
        contact: {
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            email: ""
        },
        products: []
    };

    bodyJson.contact.firstName = document.getElementById('firstname').value;
    bodyJson.contact.lastName = document.getElementById('name').value;
    bodyJson.contact.address = document.getElementById('address').value;
    bodyJson.contact.city = document.getElementById('city').value;
    bodyJson.contact.email = document.getElementById('email').value;

    //Creation of POST XMLHTTPRequest 
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            console.log(response.orderId);
        }
    };

    xhr.open('POST', 'http://localhost:3000/api/teddies/order');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(bodyJson));
};




