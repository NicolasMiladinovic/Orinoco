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

(function () {
    'use strict';
    window.addEventListener('load', function () {
        var forms = document.getElementsByClassName('needs-validation');
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

function displayAllCart() {
    let cartContent = localStorage.getItem('cart');
    let itemList = JSON.parse(cartContent);
    let removeButton;
    let totalPrice = 0;
    let panier = document.getElementById('produit');

    if (itemList.length == 0) {
        document.getElementById('produit').innerHTML = 'Panier vide'
    } else {
        itemList.forEach((item) => {

            bodyJson.products.push(item.id);

            let newProduct = document.createElement('div');
            newProduct.setAttribute('class', 'newProduct');

            let newDivPosition = document.createElement('div');
            newDivPosition.setAttribute('id', 'newDivPosition');

            removeButton = document.createElement('button');
            removeButton.setAttribute('type', 'button');
            removeButton.setAttribute('class', 'close');
            removeButton.setAttribute('aria-label', 'Close');

            let optionRemoveButton = document.createElement('i');
            optionRemoveButton.setAttribute('class', 'fas fa-trash fa-stack-2x')

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

            let newDivImg = document.createElement('div');

            const newImg = document.createElement("img");
            newImg.setAttribute('src', item.image);
            newImg.setAttribute('id', 'imgPanier');

            let newDivNameAndPrice = document.createElement('div');

            let newDivName = document.createElement('div');
            newDivName.textContent = item.name;

            let newDivOpt = document.createElement('div');
            newDivOpt.textContent = item.option;

            let newDivPrice = document.createElement('div');
            newDivPrice.textContent = item.price / 100 + " €";
            totalPrice += item.price / 100;

            removeButton.appendChild(optionRemoveButton);
            newProduct.appendChild(newDivPosition);
            newProduct.appendChild(newDivImg);
            newDivImg.appendChild(newImg);
            newDivPosition.appendChild(newDivClear);
            newDivPosition.appendChild(removeButton);
            newDivPosition.appendChild(newDivName);
            newDivPosition.appendChild(newDivOpt);
            newDivPosition.appendChild(newDivPrice);
            panier.appendChild(newProduct);
        });
    }


    localStorage.setItem("Total", totalPrice);
    document.getElementById('totalPrice').innerHTML = totalPrice;
}

function sendCommand(event) {
    
    event.preventDefault();

    bodyJson.contact.firstName = document.getElementById('firstname').value;
    bodyJson.contact.lastName = document.getElementById('name').value;
    bodyJson.contact.address = document.getElementById('address').value;
    bodyJson.contact.city = document.getElementById('city').value;
    bodyJson.contact.email = document.getElementById('email').value;
    let makeRequest = () => {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest()

            xhr.open('POST', 'http://localhost:3000/api/teddies/order')

            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(JSON.parse(xhr.responseText))
                    console.log('1');
                    document.location.href = '../html/confirmation.html';
                } else {
                    reject({
                        status: xhr.status,
                        statusText: xhr.statusText
                    })
                }
            }
            xhr.onerror = () => {
                reject({
                    status: xhr.status,
                    statusText: xhr.statusText
                })
            }

            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(bodyJson));
        })
    }

    makeRequest()
        .then((data) => {
            localStorage.setItem("orderId", data.orderId);
        })
        .catch((err) => {
            console.log(err);
            document.querySelectorAll('input').setAttribute('class','is-invalid');
        })
}


// function sendCommand(event) {
//     event.preventDefault();

//     bodyJson.contact.firstName = document.getElementById('firstname').value;
//     bodyJson.contact.lastName = document.getElementById('name').value;
//     bodyJson.contact.address = document.getElementById('address').value;
//     bodyJson.contact.city = document.getElementById('city').value;
//     bodyJson.contact.email = document.getElementById('email').value;

//     //Creation of POST XMLHTTPRequest 
//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', 'http://localhost:3000/api/teddies/order');
//     xhr.onload = () => {
//         if (xhr.status >= 200 && xhr.status < 300) {
//             const response = JSON.parse(xhr.responseText);
//             console.log(response);
//             localStorage.setItem("orderId", response.orderId);
//             console.log(response.orderId);
//             document.location.href = '../html/confirmation.html';
//         }
//     };
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.send(JSON.stringify(bodyJson));
// };
