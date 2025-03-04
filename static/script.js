const products = [
    { id: 1, name: "Burger", price: 4.99, image: "https://via.placeholder.com/80" },
    { id: 2, name: "Fries", price: 1.49, image: "https://via.placeholder.com/80" },
    { id: 3, name: "Coke", price: 1.49, image: "https://via.placeholder.com/80" },
];

let cart = [];

function renderProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    products.forEach(product => {
        const productEl = document.createElement("div");
        productEl.className = "product";
        productEl.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">ADD</button>
        `;
        productList.appendChild(productEl);
    });
}

function addToCart(id) {
    cart.push(id);
    document.getElementById("cart-count").innerText = cart.length;
}

document.addEventListener("DOMContentLoaded", renderProducts);
