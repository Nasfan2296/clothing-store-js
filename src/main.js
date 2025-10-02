// src/main.js
import { fetchProducts } from "./api.js";

const shop = document.getElementById("shop");
const cartIcon = document.getElementById("cartAmount");
let basket = JSON.parse(localStorage.getItem("data")) || [];

// Generate Shop Products
async function generateShop() {
  const shopItemsData = await fetchProducts();
  if (!shopItemsData.length) return;

  shop.innerHTML = shopItemsData.map(product => {
    const { id, name, price, desc, img } = product;
    const cartItem = basket.find(item => item.id === id) || {};
    return `
      <div class="item" id="product-id-${id}">
        <img width="220" src="${img}" alt="${name}" />
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>$ ${price}</h2>
            <div class="buttons">
              <i onclick="decrement('${id}')" class="bi bi-dash-lg"></i>
              <div id="${id}" class="quantity">${cartItem.item || 0}</div>
              <i onclick="increment('${id}')" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
  calculation();
}

// Cart Functions
window.increment = function(id) {
  let selectedItem = basket.find(x => x.id === id);
  if (!selectedItem) basket.push({ id, item: 1 });
  else selectedItem.item += 1;
  update(id);
  localStorage.setItem("data", JSON.stringify(basket));
}

window.decrement = function(id) {
  let selectedItem = basket.find(x => x.id === id);
  if (!selectedItem || selectedItem.item === 0) return;
  selectedItem.item -= 1;
  basket = basket.filter(x => x.item > 0);
  update(id);
  localStorage.setItem("data", JSON.stringify(basket));
}

function update(id) {
  const selectedItem = basket.find(x => x.id === id);
  document.getElementById(id).innerHTML = selectedItem ? selectedItem.item : 0;
  calculation();
}

function calculation() {
  cartIcon.innerHTML = basket.map(x => x.item).reduce((x, y) => x + y, 0);
}

generateShop();
