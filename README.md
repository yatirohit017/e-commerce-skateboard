# 🛍️ Responsive Product Showcase Web App

A fully responsive web application that dynamically loads and displays products from a mock API. Features sorting functionality, elegant UI, and graceful error handling. Built with **HTML**, **CSS**, and **JavaScript**—no frameworks required.

---

## 🔗 Live Preview

> Coming soon (or deploy using GitHub Pages / Vercel)


---

## 🚀 Features

- 📦 Fetches real product data from a mock API
- 🖼 Displays product cards (image, title, price)
- ⏳ Simulated loading delay on "Load Products"
- 📉 Sort by price: **Low to High** / **High to Low**
- ❌ Shows an "empty shelf" error page initially
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Clean UI with hover effects and accessible font sizes

---

## 🌐 Tech Stack

- **HTML5** – Semantic structure
- **CSS3** – Flexbox layout + media queries
- **JavaScript (ES6+)** – DOM manipulation, API fetch
- **Mock API** – [`interveiw-mock-api`](https://interveiw-mock-api.vercel.app/api/getProducts)

---

## 🗃️ Folder Structure

product-showcase

 index.html # Main HTML file
 style.css # Desktop-first CSS
 media-query.css # Responsive styles (tablet & mobile)
 script.js # JS logic for fetching & sorting
└README.md # You're reading this!

## 📡 API Details

**Endpoint:**  
`https://interveiw-mock-api.vercel.app/api/getProducts`

**Response Sample:**
```json
{
  "data": [
    {
      "product": {
        "title": "Product Title",
        "image": { "src": "image_url", "alt": "description" },
        "variants": [ { "price": "1299.00" } ]
      }
    }
  ]
}
