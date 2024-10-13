let cart = [];

function addToCart(product) {
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = ''; // Clear cart
    if (cart.length === 0) {
        cartItems.innerHTML = '<li>No items in the cart yet.</li>';
    } else {
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            cartItems.appendChild(li);
        });
    }
}
