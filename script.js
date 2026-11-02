
let cart = [];

function updateCart() {

    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML =
            '<p class="empty-cart">Your bag is waiting for some love! 💗</p>';
    }

    cart.forEach((item, index) => {

        total += item.price;

        const row = document.createElement("div");
        row.className = "cart-item";

        const name = document.createElement("span");
        name.textContent = item.name;

        const price = document.createElement("span");
        price.textContent = "Rs. " + item.price.toLocaleString("en-PK");

        const remove = document.createElement("button");
        remove.textContent = "Remove";

        remove.addEventListener("click", () => {
            cart.splice(index, 1);
            updateCart();
        });

        row.append(name, price, remove);
        cartItems.appendChild(row);

    });

    cartTotal.textContent = total.toLocaleString("en-PK");

    document.getElementById("cart-count").textContent = cart.length;
}


// ADD TO BAG
document.querySelectorAll(".add-btn").forEach(button => {

    button.addEventListener("click", function() {

        cart.push({
            name: this.dataset.name,
            price: Number(this.dataset.price)
        });

        updateCart();

        alert("Added to your Glossify bag! 💗");

    });

});


// CHECKOUT DEMO
document.getElementById("checkout").addEventListener("click", function() {

    if (cart.length === 0) {
        alert("Your shopping bag is empty! 💗");
        return;
    }

    alert(
        "Your order total is Rs. " +
        cart.reduce((sum, item) => sum + item.price, 0).toLocaleString("en-PK") +
        "\nCheckout system will be connected soon!"
    );

});


// NEWSLETTER
document.getElementById("subscribe-form").addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("subscribe-message").textContent =
        "Thank you for joining Glossify! 💕";

    this.reset();

});


// INITIAL CART
updateCart();
