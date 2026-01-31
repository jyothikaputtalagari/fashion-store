let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart 🛒");
}

function addToWishlist(id) {
  const product = products.find(p => p.id === id);
  wishlist.push(product);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  alert("Added to wishlist ❤️");
}

function loadProducts() {
  const container = document.getElementById("productList");
  products.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <a href="product.html?id=${p.id}">View</a>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
        <button onclick="addToWishlist(${p.id})">♡</button>
      </div>
    `;
  });
}

function loadSingleProduct() {
  const id = new URLSearchParams(window.location.search).get("id");
  const p = products.find(item => item.id == id);
  document.getElementById("product").innerHTML = `
    <img src="${p.image}">
    <h2>${p.name}</h2>
    <p>${p.desc}</p>
    <p>₹${p.price}</p>
    <button onclick="addToCart(${p.id})">Add to Cart</button>
    <button onclick="addToWishlist(${p.id})">Wishlist</button>
  `;
}

function displayCart() {
  const ul = document.getElementById("cartItems");
  cart.forEach(p => {
    ul.innerHTML += `<li>${p.name} - ₹${p.price}</li>`;
  });
}

function displayWishlist() {
  const ul = document.getElementById("wishlistItems");
  wishlist.forEach(p => {
    ul.innerHTML += `<li>${p.name}</li>`;
  });
}
