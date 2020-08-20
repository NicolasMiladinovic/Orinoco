// document.getElementById('produit').innerHTML = localStorage.getItem('cart');

let cartContent = localStorage.getItem('cart');
let itemList = JSON.parse(cartContent);

console.log(itemList);

// console.log(itemList[0].name);

let panier = document.getElementById('produit');

itemList.forEach((item) => {
    console.log(item.id + ' ' + item.name + ' ' + item.price)

    let newDivImg = document.createElement("div");
    newDivImg.textContent = item.image;
    newDivImg.setAttribute('id' , 'divImg');

    let newDivName = document.createElement('div');
    newDivName.textContent = item.name;
    newDivName.setAttribute('id' , 'divName');

    let newDivPrice = document.createElement('div');
    newDivPrice.textContent = item.price;
    newDivPrice.setAttribute('id' , 'divPrice');

    panier.appendChild(newDivImg);
    panier.appendChild(newDivName);
    panier.appendChild(newDivPrice);
    });

