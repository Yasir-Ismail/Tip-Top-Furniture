/**
 * ============================================================
 *  TipTop Furniture — Product Data Store
 * ============================================================
 *  HOW TO EDIT PRODUCTS:
 *  1. Each product is an object inside the `products` array.
 *  2. Add / remove / edit any product below.
 *  3. Images use Unsplash URLs — replace with your own photos.
 *  4. Available fields:
 *       id            – unique number
 *       name          – product display name
 *       category      – must match a CATEGORY id below
 *       price         – starting price string (set "" to hide)
 *       images        – array of image URLs (first = thumbnail)
 *       description   – short paragraph
 *       available_sizes – array of size strings
 *       wood_types    – array of wood options
 *       foam_types    – array of foam options
 *       polish_colors – array of polish/color options
 *       delivery_time – estimated delivery string
 *
 *  HOW TO CHANGE WHATSAPP NUMBER:
 *  Open js/app.js and change the WHATSAPP_NUMBER constant.
 * ============================================================
 */

const CATEGORIES = [
  { id: "sofa-sets",        name: "Sofa Sets",        icon: "bi-house-heart" },
  { id: "beds",             name: "Beds",             icon: "bi-moon-stars" },
  { id: "dining-tables",    name: "Dining Tables",    icon: "bi-cup-hot" },
  { id: "wardrobes",        name: "Wardrobes",        icon: "bi-box-seam" },
  { id: "office-furniture", name: "Office Furniture",  icon: "bi-briefcase" },
];

const products = [
  /* ── Sofa Sets ───────────────────────────────────── */
  {
    id: 1,
    name: "L-Shape Sofa",
    category: "sofa-sets",
    price: "₹32,000",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80",
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80",
    ],
    description:
      "A spacious L-shape sofa that transforms any living room into a luxurious retreat. Premium upholstery, high-resilience foam, and reinforced hardwood frame ensure years of comfort.",
    available_sizes: ["7×5 ft", "7×9 ft", "8×6 ft", "9×6 ft", "Custom"],
    wood_types: ["Sheesham", "Teak", "Mango Wood", "MDF"],
    foam_types: ["Standard", "High-Resilience (HR)", "Memory Foam", "Premium Rebond"],
    polish_colors: ["Natural", "Walnut", "Dark Brown", "Honey", "Mahogany"],
    delivery_time: "18–22 days",
  },
  {
    id: 2,
    name: "3-Seater Chesterfield Sofa",
    category: "sofa-sets",
    price: "₹28,500",
    images: [
      "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=800&q=80",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80",
    ],
    description:
      "Classic Chesterfield silhouette with deep button-tufting and rolled arms. Available in fabric or leatherette finish.",
    available_sizes: ["6 ft", "7 ft", "Custom"],
    wood_types: ["Sheesham", "Teak", "Sal Wood"],
    foam_types: ["Standard", "High-Resilience (HR)", "Premium Rebond"],
    polish_colors: ["Natural", "Walnut", "Dark Brown", "Black"],
    delivery_time: "15–20 days",
  },
  {
    id: 3,
    name: "Fabric Recliner Sofa",
    category: "sofa-sets",
    price: "₹22,000",
    images: [
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      "https://images.unsplash.com/photo-1491926626787-62db157af940?w=800&q=80",
    ],
    description:
      "Lean back and relax with our manual recliner sofa featuring plush cushioning and strong steel mechanism. Ideal for compact living rooms.",
    available_sizes: ["Single Seat", "2-Seater", "3-Seater", "Custom"],
    wood_types: ["Sheesham", "MDF", "Engineered Wood"],
    foam_types: ["Standard", "High-Resilience (HR)", "Memory Foam"],
    polish_colors: ["Grey", "Beige", "Navy Blue", "Olive Green"],
    delivery_time: "12–18 days",
  },

  /* ── Beds ────────────────────────────────────────── */
  {
    id: 4,
    name: "King-Size Storage Bed",
    category: "beds",
    price: "₹26,000",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
      "https://images.unsplash.com/photo-1616627561950-9f746e330187?w=800&q=80",
    ],
    description:
      "Solid wood king-size bed with hydraulic storage. Clean minimal design with sturdy slat support for a restful night.",
    available_sizes: ["King (6×6.5 ft)", "Queen (5×6.5 ft)", "Custom"],
    wood_types: ["Sheesham", "Teak", "Mango Wood"],
    foam_types: [],
    polish_colors: ["Natural", "Walnut", "Dark Brown", "Honey", "White"],
    delivery_time: "20–25 days",
  },
  {
    id: 5,
    name: "Upholstered Platform Bed",
    category: "beds",
    price: "₹30,000",
    images: [
      "https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800&q=80",
      "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=800&q=80",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80",
    ],
    description:
      "Contemporary upholstered bed with a tall wingback headboard. Fabric finish with a solid wood inner frame.",
    available_sizes: ["King (6×6.5 ft)", "Queen (5×6.5 ft)", "Custom"],
    wood_types: ["Sheesham", "Engineered Wood"],
    foam_types: ["Standard", "High-Resilience (HR)"],
    polish_colors: ["Grey Fabric", "Beige Fabric", "Blue Fabric", "Green Fabric"],
    delivery_time: "18–22 days",
  },
  {
    id: 6,
    name: "Solid Wood Poster Bed",
    category: "beds",
    price: "₹35,000",
    images: [
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ez637a745?w=800&q=80",
      "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?w=800&q=80",
    ],
    description:
      "Timeless four-poster bed handcrafted from solid Sheesham. A statement piece that elevates any bedroom.",
    available_sizes: ["King (6×6.5 ft)", "Queen (5×6.5 ft)", "Custom"],
    wood_types: ["Sheesham", "Teak"],
    foam_types: [],
    polish_colors: ["Natural", "Dark Walnut", "Honey", "Mahogany"],
    delivery_time: "25–30 days",
  },

  /* ── Dining Tables ──────────────────────────────── */
  {
    id: 7,
    name: "6-Seater Dining Table Set",
    category: "dining-tables",
    price: "₹24,000",
    images: [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=800&q=80",
    ],
    description:
      "Elegant 6-seater dining table with matching cushioned chairs. Solid wood top with sturdy tapered legs.",
    available_sizes: ["4-Seater", "6-Seater", "8-Seater", "Custom"],
    wood_types: ["Sheesham", "Teak", "Mango Wood", "Acacia"],
    foam_types: ["Standard (Chair Cushion)", "HR (Chair Cushion)"],
    polish_colors: ["Natural", "Walnut", "Dark Brown", "Honey"],
    delivery_time: "15–20 days",
  },
  {
    id: 8,
    name: "Extendable Dining Table",
    category: "dining-tables",
    price: "₹28,000",
    images: [
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=800&q=80",
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80",
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    ],
    description:
      "Smart butterfly-extension mechanism lets this table expand from a cozy 4-seater to a generous 8-seater in seconds.",
    available_sizes: ["4→6 Seater", "6→8 Seater", "Custom"],
    wood_types: ["Sheesham", "Teak", "Engineered Wood"],
    foam_types: [],
    polish_colors: ["Natural", "Walnut", "Dark Brown", "White Wash"],
    delivery_time: "20–25 days",
  },

  /* ── Wardrobes ──────────────────────────────────── */
  {
    id: 9,
    name: "3-Door Sliding Wardrobe",
    category: "wardrobes",
    price: "₹34,000",
    images: [
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80",
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800&q=80",
    ],
    description:
      "Space-saving sliding-door wardrobe with full-mirror panel, internal drawers, hanging rods, and adjustable shelves.",
    available_sizes: ["5×7 ft", "6×7 ft", "7×7 ft", "Custom"],
    wood_types: ["Sheesham", "Engineered Wood", "MDF"],
    foam_types: [],
    polish_colors: ["White", "Walnut", "Dark Brown", "Grey Oak"],
    delivery_time: "22–28 days",
  },
  {
    id: 10,
    name: "2-Door Classic Wardrobe",
    category: "wardrobes",
    price: "₹22,000",
    images: [
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80",
      "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80",
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=800&q=80",
    ],
    description:
      "Solid wood two-door wardrobe with a traditional louvered design. Equipped with internal drawers and full-width hanging space.",
    available_sizes: ["4×7 ft", "5×7 ft", "Custom"],
    wood_types: ["Sheesham", "Teak", "Mango Wood"],
    foam_types: [],
    polish_colors: ["Natural", "Walnut", "Honey", "Mahogany"],
    delivery_time: "18–24 days",
  },

  /* ── Office Furniture ───────────────────────────── */
  {
    id: 11,
    name: "Executive Office Desk",
    category: "office-furniture",
    price: "₹18,000",
    images: [
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80",
      "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
    ],
    description:
      "Spacious executive desk with cable management, lockable drawers, and a rich wood-grain finish. Perfect for home offices and cabins.",
    available_sizes: ["4×2 ft", "5×2.5 ft", "6×3 ft", "Custom"],
    wood_types: ["Sheesham", "Engineered Wood", "MDF"],
    foam_types: [],
    polish_colors: ["Natural", "Walnut", "Dark Brown", "White"],
    delivery_time: "12–18 days",
  },
  {
    id: 12,
    name: "Ergonomic Wooden Chair",
    category: "office-furniture",
    price: "₹8,500",
    images: [
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=80",
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80",
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80",
    ],
    description:
      "Handcrafted wooden office chair with contoured backrest and padded seat. Swivel base with height adjustment.",
    available_sizes: ["Standard", "Large", "Custom"],
    wood_types: ["Sheesham", "Teak", "Mango Wood"],
    foam_types: ["Standard", "High-Resilience (HR)", "Memory Foam"],
    polish_colors: ["Natural", "Walnut", "Black", "Dark Brown"],
    delivery_time: "10–15 days",
  },
];
