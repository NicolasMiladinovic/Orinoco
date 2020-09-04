//appelle tous les boutons des teddys

// const teddys_div = document.getElementById('teddys');

// const container = document.createElement('div');
// container.setAttribute('class', 'container');
// teddys_div.appendChild(container);

// let request = new XMLHttpRequest();
// request.open('GET', 'http://localhost:3000/api/teddies', true);
// request.onload = function () {
//     let data = JSON.parse(this.response);
//     if (request.status >= 200 && request.status < 400) {
//         data.forEach((teddy) => {
//             const card = document.createElement('div');
//             card.setAttribute('class', 'card');

//             const button = document.createElement('button');
//             button.setAttribute("value", teddy._id);
//             button.setAttribute("class", "addCartButton");
//             button.textContent = "Ajouter au panier";
//             button.addEventListener("click", function (e) {              
//                 let actualCart = localStorage.getItem("cart");
//                 let actualCartInJson=[];
//                 if (actualCart!=null){  
//                      actualCartInJson = JSON.parse(actualCart);
//                     //  console.log(actualCartInJson[0].id);
//                 }
//                 let newElement = {id: teddy._id, name: teddy.name, price: teddy.price, image: teddy.imageUrl};
//                 actualCartInJson.push(newElement);
//                 localStorage.setItem("cart", JSON.stringify(actualCartInJson));
//                 console.log(actualCartInJson);
//             });

//             container.appendChild(card);

//             card.appendChild(button);
//         });
//     } else {
//         const errorMessage = document.createElement('marquee');
//         errorMessage.textContent = "It's not working !";
//         teddys_div.appendChild(errorMessage);
//     };
// };

// request.send();

document.addEventListener("DOMContentLoaded", function (event) {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let objectId = urlParams.get('id');
    let type = urlParams.get('type');
    console.log("je cherche " + objectId + ' de type ' + type);
    // ajaxGet("http://localhost:3000/api/" + type + "/" + objectId, displayObject);
    let request = new XMLHttpRequest();
    request.open('GET', "http://localhost:3000/api/" + type + "/" + objectId, true);
    request.onload = function () {
        let data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            console.log(data);
        } else {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = "It's not working !";
            teddys_div.appendChild(errorMessage);
        };
    };
    request.send();
});


// let objectCart = document.createElement('a');

// objectCart.textContent = 'ajouter au panier';
// document.getElementById('cart').appendChild(objectCart);

// EN COURS

const button = document.createElement('button');
            button.setAttribute("id", objectId);
            button.setAttribute("value", objectId);
            button.setAttribute("class", "addCartButton");
            button.textContent = "Ajouter au panier";
            button.addEventListener("click", function (e) {              
                let actualCart = localStorage.getItem("cart");
                let actualCartInJson=[];
                if (actualCart!=null){  
                     actualCartInJson = JSON.parse(actualCart);
                    //  console.log(actualCartInJson[0].id);
                }
                let newElement = {id: objectId, name: teddy.name, price: teddy.price, image: teddy.imageUrl};
                actualCartInJson.push(newElement);
                localStorage.setItem("cart", JSON.stringify(actualCartInJson));
                console.log(actualCartInJson);
            });