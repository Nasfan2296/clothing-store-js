// src/api.js
export async function fetchProducts() {
  try {
    const response = await fetch("../products.json"); // path relative to src/main.js
    if (!response.ok) throw new Error("Failed to fetch products");
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
}
