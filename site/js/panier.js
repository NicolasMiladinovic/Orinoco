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



contact = {
    nom: 'toto',
    firstname: 'titi',
    mail: 'tototiti',
    adresse: 'Champs Elysées',
};

product = [
    'id1', 'id2'
];

// const panier = [
//     {
//       id: 11789,
//       name: 'Norbert'
//     },
//     {
//       id: 6789,
//       name: "Nico"
//     },
//     {
//       id: 1235641789,
//       name: "Toni"
//     }
//   ]
  
  
//   clickedId = 123456789;
//   indexCount = 0;
  
//   console.log(panier)
//   panier.forEach(function(oneItem){
//       if (oneItem.id === clickedId){
//         panier.splice(indexCount, 1)
//       }
//         indexCount += 1;
//   })
//   JSON.encode(panier);
//   localStorage.setItem(cart, panier);
//   var container = document.getElementById("Container");
//   container.innerHTML = "";
//   DisplayAllCart()
  
  
  
//   function DisplayAllCart(){
//     var cart = localStorage.getItem("cart")
//     var container = document.getElementById("Container")
//     .......
    
    
//     container.appendChild(AllContent)
//   }