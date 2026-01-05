👕 Clothing Store JS — E-Commerce Frontend Project

Project Overview:
A scalable, modular e-commerce clothing store built with HTML, CSS, and vanilla JavaScript. This project demonstrates end-to-end frontend architecture, including dynamic product listing, shopping cart management, and persistent state with localStorage. Designed with responsiveness, maintainability, and performance in mind.

🚀 Key Features

Dynamic Product Listing:
Products are fetched via a JSON API (products.json) and rendered dynamically, enabling easy updates and scalability.

Shopping Cart Management:
Users can add/remove items, increment/decrement quantities, and view real-time cart totals.

Persistent Cart State:
Cart data persists across sessions using localStorage, enhancing user experience and reducing friction.

Responsive Design:
Fully responsive for mobile and desktop, ensuring consistent user experience across devices.

Modular & Maintainable Architecture:

api.js – handles all data fetching and API abstraction

main.js – product listing and UI rendering

cart.js – cart logic and state management
This separation of concerns enables easy scaling for future features.

Clear Cart & Total Calculation:
Users can easily reset their cart, with dynamic updates to totals.

📁 Folder Structure
clothing-store-js/
├─ index.html          # Main storefront
├─ cart.html           # Shopping cart page
├─ style.css           # Global styling
├─ products.json       # Product data source
└─ src/
   ├─ api.js           # Handles data fetching
   ├─ main.js          # Product listing & UI rendering
   └─ cart.js          # Cart management logic

🛠 Technologies Used

HTML5 & CSS3 – Semantic markup and responsive design

Vanilla JavaScript (ES6+) – Modular architecture & dynamic UI

Fetch API – Efficient data retrieval from JSON API

LocalStorage – Persistent cart state for improved UX

📌 How to Run

Clone the repository:

git clone <repository-url>


Open the project in VS Code (or preferred editor).

Start a Live Server on index.html:

Right-click index.html → Open with Live Server
Necessary for fetching products.json locally.

Explore Features:

Browse products

Add items to cart

Increment/decrement quantities

Clear cart

Observe persistent cart state across page reloads

⚡ Project Highlights

Scalable Design: Easily add new products or features without rewriting core logic.

Modular Codebase: Encourages maintainability and teamwork collaboration.

User-Centric Features: Cart persistence and responsive design ensure seamless shopping experience.

Hands-On Frontend Engineering: Demonstrates understanding of state management, dynamic DOM rendering, and API integration without frameworks.
