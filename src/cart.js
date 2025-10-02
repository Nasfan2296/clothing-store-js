// src/cart.js
import { fetchProducts } from "./api.js";

const ShoppingCart = document.getElementById("shopping-cart");
const label = document.getElementById("label");
const cartIcon = document.getElementById("cartAmount");
let basket = JSON.parse(localStorage.getItem("data")) || [];

async function generateCartItems() {
  const shopItemsData = await fetchProducts();

  if (basket.length === 0) {
    ShoppingCart.innerHTML = "";
    label.innerHTML = `
      <h2>Cart is Empty</h2>
      <a href="index.html">
        <button class="HomeBtn">Back to Home</button>
      </a>
    `;
    updateCartIcon();
    return;
  }

  ShoppingCart.innerHTML = basket.map(x => {
    const product = shopItemsData.find(p => p.id === x.id) || {};
    return `
      <div class="cart-item">
        <img width="100" src="${product.img}" alt="${product.name}" />
        <div class="details">
          <div class="title-price-x">
            <h4 class="title-price">
              <p>${product.name}</p>
              <p class="cart-item-price">$ ${product.price}</p>
            </h4>
            <i onclick="removeItem('${x.id}')" class="bi bi-x-lg"></i>
          </div>
          <div class="buttons">
            <i onclick="decrement('${x.id}')" class="bi bi-dash-lg"></i>
            <div id="${x.id}" class="quantity">${x.item}</div>
            <i onclick="increment('${x.id}')" class="bi bi-plus-lg"></i>
          </div>
          <h3>$ ${x.item * product.price}</h3>
        </div>
      </div>
    `;
  }).join("");

  calculateTotal(shopItemsData);
  updateCartIcon();
}

// Functions
window.increment = function(id) {
  let selectedItem = basket.find(x => x.id === id);
  if (!selectedItem) basket.push({ id, item: 1 });
  else selectedItem.item += 1;
  updateItem(id);
  localStorage.setItem("data", JSON.stringify(basket));
}

window.decrement = function(id) {
  let selectedItem = basket.find(x => x.id === id);
  if (!selectedItem) return;
  selectedItem.item -= 1;
  basket = basket.filter(x => x.item > 0);
  updateItem(id);
  localStorage.setItem("data", JSON.stringify(basket));
}

window.removeItem = function(id) {
  basket = basket.filter(x => x.id !== id);
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
}

window.clearCart = function() {
  basket = [];
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
}

function updateItem(id) {
  const selectedItem = basket.find(x => x.id === id);
  document.getElementById(id).innerHTML = selectedItem ? selectedItem.item : 0;
  generateCartItems();
}

function calculateTotal(shopItemsData) {
  const amount = basket
    .map(x => {
      const product = shopItemsData.find(p => p.id === x.id) || {};
      return x.item * product.price;
    })
    .reduce((x, y) => x + y, 0);

  label.innerHTML = `
    <h2>Total Bill: $ ${amount}</h2>
    <button class="checkout">Checkout</button>
    <button onclick="clearCart()" class="removeAll">Clear Cart</button>
  `;
}

function updateCartIcon() {
  cartIcon.innerHTML = basket.map(x => x.item).reduce((x, y) => x + y, 0);
}

generateCartItems();
