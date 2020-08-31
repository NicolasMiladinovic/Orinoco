// document.getElementById('produit').innerHTML = localStorage.getItem('cart');

let cartContent = localStorage.getItem('cart');
let itemList = JSON.parse(cartContent);

console.log(itemList);

// console.log(itemList[0].name);

let totalPrice = 0;

let panier = document.getElementById('produit');

itemList.forEach((item) => {
    console.log(item.id + ' ' + item.name + ' ' + item.price)

    let newProduct = document.createElement('div');
    newProduct.setAttribute('class', 'newProduct');

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

    newProduct.appendChild(newImg);
    newProduct.appendChild(newDivName);
    newProduct.appendChild(newDivPrice);

    panier.appendChild(newProduct);
});


document.getElementById('totalPrice').innerHTML = totalPrice;

console.log(totalPrice);