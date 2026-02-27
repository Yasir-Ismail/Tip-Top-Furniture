# TipTop Furniture — Custom Furniture Catalog Website

A premium, catalog-driven sales website for furniture businesses where orders are finalized on WhatsApp. **Not an eCommerce site** — this is a design catalog + specification capture + WhatsApp order system.

---

## 📁 Folder Structure

```
Tip-Top-Furniture/
├── index.html          ← Main website
├── css/
│   └── style.css       ← Premium custom styles
├── js/
│   ├── products.js     ← Product data (edit products here)
│   └── app.js          ← App logic (edit WhatsApp number here)
├── images/             ← Place your product photos here
└── README.md
```

## 🚀 How to Run

1. Open `index.html` in any browser — **no server needed**.
2. For local development, use VS Code Live Server extension.

---

## ⚙️ How to Edit

### Change WhatsApp Number

Open `js/app.js` and edit line 9:

```js
const WHATSAPP_NUMBER = "919876543210"; // ← Your number with country code, no + or spaces
```

### Add / Edit Products

Open `js/products.js` and edit the `products` array. Each product object:

```js
{
  id: 13,                          // unique number
  name: "Your Product Name",
  category: "sofa-sets",           // must match a CATEGORIES id
  price: "₹25,000",               // set "" to hide price
  images: [                        // array of image URLs
    "https://example.com/photo1.jpg",
    "https://example.com/photo2.jpg",
  ],
  description: "Product description.",
  available_sizes: ["6 ft", "7 ft", "Custom"],
  wood_types: ["Sheesham", "Teak"],
  foam_types: ["Standard", "HR"],  // use [] if not applicable
  polish_colors: ["Natural", "Walnut"],
  delivery_time: "15–20 days",
}
```

### Add / Edit Categories

Edit the `CATEGORIES` array in `js/products.js`:

```js
{ id: "your-category", name: "Display Name", icon: "bi-icon-name" }
```

Icons: [Bootstrap Icons](https://icons.getbootstrap.com/)

### Replace Images

- Replace Unsplash URLs with your own product photos.
- For local images, place them in the `images/` folder and use relative paths: `"images/sofa1.jpg"`.

### Edit Showroom / Contact Info

Edit the Contact section directly in `index.html` (search for `id="contact"`):
- Address, phone, WhatsApp number, working hours, Google Maps embed URL.

---

## 🧩 Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure |
| CSS3 | Custom premium styling |
| Bootstrap 5.3 | Grid, components, modal |
| Bootstrap Icons | Iconography |
| JavaScript (Vanilla) | Dynamic rendering, filtering, WhatsApp logic |
| Google Fonts | Playfair Display + Inter |

---

## ✅ Features

- **Hero** — Full-screen lifestyle imagery with entrance animations
- **Category Filtering** — JavaScript-powered instant filtering
- **Product Cards** — Hover effects, lazy loading, clean presentation
- **Product Detail Modal** — Image gallery, customization dropdowns, delivery info
- **WhatsApp Order** — Auto-generates structured message with all selections via `encodeURIComponent()`
- **Why Choose Us** — Trust-building section with icons and scroll animations
- **Testimonials** — Customer review cards with star ratings
- **Contact / Showroom** — Address, phone, map embed
- **Floating WhatsApp Button** — Always visible, animated pulse
- **Fully Responsive** — Mobile-first design
- **Scroll Animations** — Intersection Observer powered
- **Navbar Shrink** — Compact on scroll with blur backdrop

---

## 📱 WhatsApp Order Message Format

When a customer clicks "Order on WhatsApp", the system generates:

```
Hi! I'm interested in ordering from TipTop Furniture.

🪑 *Product:* L-Shape Sofa
📐 *Size:* 7×9 ft
🪵 *Wood Type:* Sheesham
🛋️ *Foam Type:* High-Resilience (HR)
🎨 *Polish/Color:* Dark Brown
💰 *Starting Price:* ₹32,000

Please share the final quote and delivery details. Thank you!
```

---

## 📄 License

Free to use for any furniture business. Built with craftsmanship in mind.