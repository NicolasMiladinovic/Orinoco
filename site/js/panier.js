// document.getElementById('produit').innerHTML = localStorage.getItem('cart');

let cartContent = localStorage.getItem('cart');
let itemList = JSON.parse(cartContent);

console.log(itemList);

// console.log(itemList[0].name);

let totalPrice = 0;

let panier = document.getElementById('produit');

itemList.forEach((item) => {
    console.log(item.id + ' ' + item.name + ' ' + item.price)

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

    panier.appendChild(newImg);
    panier.appendChild(newDivName);
    panier.appendChild(newDivPrice);
});

document.getElementById('totalPrice').innerHTML = totalPrice;

console.log(totalPrice);