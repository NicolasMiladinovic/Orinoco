// Récupération des éléments de la page de confirmation

document.getElementById('totalPrice').innerHTML = ": " + localStorage.getItem('Total') + ' €';
document.getElementById('orderId').innerHTML = ": "+localStorage.getItem('orderId');