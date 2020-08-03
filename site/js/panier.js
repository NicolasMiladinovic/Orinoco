console.log("Panier");

document.getElementById('produit').innerHTML = localStorage.getItem('cart');

// Exemple de localStorage
//     let myCart = [];
//     let newElement = {id: "54564654654", name: "Teddy 1"};
//     myCart.push(newElement);
//     let jsonWay = JSON.stringify(myCart);
//     localStorage.setItem("cart", jsonWay);



//     // Ici par exemple, nous n'avons plus le panier
//     let actualCart = localStorage.getItem("cart");
//     let actualCartInJson = JSON.parse(actualCart);
//     let newElement2 = {id: "zerzdsfez", name: "Teddy 2"};
//     actualCartInJson.push(newElement2);
//     localStorage.setItem("cart", JSON.stringify(actualCartInJson))
//     console.log(actualCartInJson);