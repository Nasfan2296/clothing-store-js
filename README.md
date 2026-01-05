# 👕 Clothing Store JS — E-Commerce Frontend Project

**Project Overview**  
A scalable, modular e-commerce clothing store built with HTML, CSS, and vanilla JavaScript.  
Demonstrates dynamic product listing, shopping cart management, and persistent state with `localStorage`.  
Designed for **maintainability, responsiveness, and performance**.

---

## 🚀 Key Features

- **Dynamic Product Listing**  
  Products fetched via `products.json` and rendered dynamically for scalability.

- **Shopping Cart Management**  
  Add/remove items, increment/decrement quantities, and view real-time cart totals.

- **Persistent Cart State**  
  Cart data saved in `localStorage` for seamless experience across sessions.

- **Responsive Design**  
  Optimized for mobile and desktop devices.

- **Modular Architecture**  
  - `api.js` — data fetching  
  - `main.js` — product listing & UI rendering  
  - `cart.js` — cart logic & state management

- **Clear Cart & Total Calculation**  
  Dynamically updates totals and allows easy reset of cart.
clothing-store-js/
├─ index.html # Main storefront
├─ cart.html # Shopping cart page
├─ style.css # Global styles
├─ products.json # Product data source
└─ src/
├─ api.js # Handles data fetching
├─ main.js # Product listing & UI rendering
└─ cart.js # Cart management logic

## 🛠 Technologies Used

- HTML5 & CSS3  
- Vanilla JavaScript (ES6+)  
- Fetch API for dynamic product data  
- LocalStorage for cart persistence

**Clone the repository:**  
   
   
1.Open project in VS Code (or any editor).

2.Start a Live Server on index.html:

3.Right-click index.html → Open with Live Server
Required to fetch products.json locally.

4.Test Features:

      Browse products

      Add/remove items in the cart

      Increment/decrement quantities

      Clear cart

      Observe persistent cart state across reloads

---

## 📁 Folder Structure

