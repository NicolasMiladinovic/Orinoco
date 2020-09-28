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

function displayAllCart() {
    let cartContent = localStorage.getItem('cart');
    let itemList = JSON.parse(cartContent);
    let removeButton;
    let totalPrice = 0;
    let panier = document.getElementById('produit');

    itemList.forEach((item) => {

        bodyJson.products.push(item.id);

        let newProduct = document.createElement('div');
        newProduct.setAttribute('class', 'newProduct d-flex bd-highlight');

        removeButton = document.createElement('button');
        removeButton.setAttribute('type', 'button');
        removeButton.setAttribute('class', 'close');
        removeButton.setAttribute('aria-label', 'Close');

        let optionRemoveButton = document.createElement('i');
        optionRemoveButton.setAttribute('class','fas fa-trash fa-stack-2x')

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

        let newDivClear = document.createElement('div');
        newDivClear.setAttribute('class','p-2 flex-fill bd-highlight');
        newDivClear.setAttribute('id','newDivClear');

        let newDivImg = document.createElement('div');
        newDivImg.setAttribute('class','p-2 flex-fill bd-highlight newDivImg');

        const newImg = document.createElement("img");
        newImg.setAttribute('src', item.image);
        newImg.setAttribute('id', 'divImg');

        let newDivName = document.createElement('div');
        newDivName.textContent = item.name;
        newDivName.setAttribute('id', 'divName');
        newDivName.setAttribute('class','p-2 flex-fill bd-highlight');

        let newDivPrice = document.createElement('div');
        newDivPrice.textContent = item.price/100 + " €";
        totalPrice += item.price/100;
        newDivPrice.setAttribute('id', 'divPrice');
        newDivPrice.setAttribute('class','p-2 flex-fill bd-highlight');

        removeButton.appendChild(optionRemoveButton);

        newProduct.appendChild(newDivClear);
        newDivClear.appendChild(removeButton);
        newProduct.appendChild(newDivImg);
        newDivImg.appendChild(newImg);
        newProduct.appendChild(newDivName);
        newProduct.appendChild(newDivPrice);
        panier.appendChild(newProduct);

        // newProduct.appendChild(removeButton);
        // newProduct.appendChild(newImg);
        // newProduct.appendChild(newDivName);
        // newProduct.appendChild(newDivPrice);

        // panier.appendChild(newProduct);
    });
    localStorage.setItem("Total", totalPrice);
    document.getElementById('totalPrice').innerHTML = totalPrice;
}

function sendCommand() {

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
        }
    };

    xhr.open('POST', 'http://localhost:3000/api/teddies/order');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(bodyJson));
    localStorage.setItem('orderId', )
};