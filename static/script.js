const products = [
    { id: 1, name: "Футболка VK Basic", price: 1790, category: "Футболки", image: "https://via.placeholder.com/200" },
    { id: 2, name: "Худи VK Basic", price: 4200, category: "Худи", image: "https://via.placeholder.com/200" },
    { id: 3, name: "Бейсболка VK", price: 3200, category: "Аксессуары", image: "https://via.placeholder.com/200" }
];

let cart = [];

function renderProducts(category = "Все") {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    const filtered = category === "Все" ? products : products.filter(p => p.category === category);
    filtered.forEach(product => {
        const productEl = document.createElement("div");
        productEl.className = "product";
        productEl.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} ₽</p>
            <button onclick="addToCart(${product.id})">В корзину</button>
        `;
        productList.appendChild(productEl);
    });
}

function addToCart(id) {
    cart.push(id);
    document.getElementById("cart-count").innerText = cart.length;
}

document.getElementById("categories").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        document.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        renderProducts(e.target.innerText);
    }
});

document.addEventListener("DOMContentLoaded", () => renderProducts());
