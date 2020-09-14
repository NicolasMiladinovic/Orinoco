displayAllCart();

function displayAllCart() {

    let cartContent = localStorage.getItem('cart');
    let itemList = JSON.parse(cartContent);


    let removeButton;

    console.log(itemList);

    // console.log(itemList[0].name);

    let totalPrice = 0;

    let panier = document.getElementById('produit');

    itemList.forEach((item) => {
        console.log(item.id + ' ' + item.name + ' ' + item.price)

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
            let indexCount = 0;
            let mycart = JSON.parse(localStorage.getItem('cart'));
            let clickedId = item.id;
            console.log(clickedId);
            console.log(panier);
            mycart.forEach(function (data) {
                if (data.id === clickedId) {
                    mycart.splice(indexCount, 1);
                    continue;
                }
                indexCount += 1;
            })

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

    console.log(totalPrice);

    document.getElementById('totalPrice').innerHTML = totalPrice;

}
