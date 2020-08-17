// document.getElementById('produit').innerHTML = localStorage.getItem('cart');

let cartContent = localStorage.getItem('cart');
let itemList = JSON.parse(cartContent);

console.log(itemList);

// console.log(itemList[0].name);

let panier = document.getElementById('produit');

itemList.forEach((item) => {
    console.log(item.id + ' ' + item.name + ' ' + item.price)

    let newDiv = document.createElement("div");
    newDiv.textContent = item.name + ' ' + item.price;
    panier.appendChild(newDiv);
});

