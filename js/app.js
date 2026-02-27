/**
 * ============================================================
 *  TipTop Furniture — Application Logic
 * ============================================================
 *
 *  ⚙️  CONFIGURATION — change your WhatsApp number here:
 */
const WHATSAPP_NUMBER = "923001234567"; // ← Your number with country code, no + or spaces
/**
 * ============================================================
 */

/* ── State ─────────────────────────────────────── */
let activeCategory = "all";
let currentProduct = null;
let currentImageIndex = 0;

/* ── DOM Ready ─────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  renderCategories();
  renderProducts(products);
  setupScrollAnimations();
  setupSmoothScroll();
  setupNavbarShrink();
  setupFloatingWhatsApp();
});

/* ──────────────────────────────────────────────────
   CATEGORIES
   ────────────────────────────────────────────────── */
function renderCategories() {
  const container = document.getElementById("categoriesContainer");
  if (!container) return;

  // "All" pill
  let html = `<div class="col-auto">
    <button class="category-pill active" data-cat="all" onclick="filterCategory('all', this)">
      <i class="bi bi-grid-3x3-gap"></i>
      <span>All Designs</span>
    </button>
  </div>`;

  CATEGORIES.forEach((cat) => {
    html += `<div class="col-auto">
      <button class="category-pill" data-cat="${cat.id}" onclick="filterCategory('${cat.id}', this)">
        <i class="bi ${cat.icon}"></i>
        <span>${cat.name}</span>
      </button>
    </div>`;
  });

  container.innerHTML = html;
}

function filterCategory(catId, btn) {
  activeCategory = catId;

  // Update active pill
  document.querySelectorAll(".category-pill").forEach((p) => p.classList.remove("active"));
  if (btn) btn.classList.add("active");

  const filtered = catId === "all" ? products : products.filter((p) => p.category === catId);
  renderProducts(filtered);

  // Smooth scroll to products section
  const section = document.getElementById("products");
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* ──────────────────────────────────────────────────
   PRODUCT CARDS
   ────────────────────────────────────────────────── */
function renderProducts(list) {
  const container = document.getElementById("productsGrid");
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `<div class="col-12 text-center py-5">
      <p class="text-muted fs-5">No designs found in this category.</p>
    </div>`;
    return;
  }

  container.innerHTML = list
    .map(
      (p, idx) => `
    <div class="col-sm-6 col-lg-4 col-xl-3 product-card-col" style="animation-delay:${idx * 0.07}s">
      <div class="product-card" onclick="openProductModal(${p.id})">
        <div class="product-card__img-wrap">
          <img src="${p.images[0]}" alt="${p.name}" loading="lazy" />
          <span class="product-card__badge">${getCategoryName(p.category)}</span>
        </div>
        <div class="product-card__body">
          <h5 class="product-card__title">${p.name}</h5>
          ${p.price ? `<p class="product-card__price">Starting at <strong>${p.price}</strong></p>` : ""}
          <button class="btn btn-sm btn-outline-primary product-card__btn" onclick="event.stopPropagation(); openProductModal(${p.id})">
            View Details <i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>`
    )
    .join("");
}

function getCategoryName(catId) {
  const cat = CATEGORIES.find((c) => c.id === catId);
  return cat ? cat.name : catId;
}

/* ──────────────────────────────────────────────────
   PRODUCT DETAIL MODAL
   ────────────────────────────────────────────────── */
function openProductModal(productId) {
  currentProduct = products.find((p) => p.id === productId);
  if (!currentProduct) return;
  currentImageIndex = 0;

  const modal = document.getElementById("productModal");
  const body = document.getElementById("productModalBody");

  body.innerHTML = buildModalContent(currentProduct);
  initModalGallery();

  const bsModal = new bootstrap.Modal(modal);
  bsModal.show();
}

function buildModalContent(p) {
  const sizeOptions = p.available_sizes.map((s) => `<option value="${s}">${s}</option>`).join("");
  const woodOptions = p.wood_types.map((w) => `<option value="${w}">${w}</option>`).join("");
  const foamOptions = p.foam_types.length
    ? p.foam_types.map((f) => `<option value="${f}">${f}</option>`).join("")
    : "";
  const polishOptions = p.polish_colors.map((c) => `<option value="${c}">${c}</option>`).join("");

  return `
  <div class="row g-4">
    <!-- Gallery -->
    <div class="col-lg-6">
      <div class="modal-gallery">
        <div class="modal-gallery__main">
          <img id="modalMainImage" src="${p.images[0]}" alt="${p.name}" />
          <button class="gallery-nav gallery-nav--prev" onclick="galleryNav(-1)"><i class="bi bi-chevron-left"></i></button>
          <button class="gallery-nav gallery-nav--next" onclick="galleryNav(1)"><i class="bi bi-chevron-right"></i></button>
        </div>
        <div class="modal-gallery__thumbs" id="galleryThumbs">
          ${p.images.map((img, i) => `<img src="${img}" alt="View ${i + 1}" class="${i === 0 ? "active" : ""}" onclick="galleryGoTo(${i})" />`).join("")}
        </div>
      </div>
    </div>

    <!-- Details & Customization -->
    <div class="col-lg-6">
      <span class="badge bg-primary-subtle text-primary mb-2">${getCategoryName(p.category)}</span>
      <h3 class="modal-product-title">${p.name}</h3>
      ${p.price ? `<p class="modal-product-price">${p.price} onwards</p>` : ""}
      <p class="modal-product-desc">${p.description}</p>

      <hr />

      <h6 class="fw-semibold mb-3"><i class="bi bi-palette me-2"></i>Customize Your Order</h6>

      <div class="row g-3 mb-3">
        <div class="col-sm-6">
          <label class="form-label">Size</label>
          <select id="optSize" class="form-select form-select-sm">${sizeOptions}</select>
        </div>
        <div class="col-sm-6">
          <label class="form-label">Wood Type</label>
          <select id="optWood" class="form-select form-select-sm">${woodOptions}</select>
        </div>
      </div>

      ${
        foamOptions
          ? `<div class="row g-3 mb-3">
              <div class="col-sm-6">
                <label class="form-label">Foam Type</label>
                <select id="optFoam" class="form-select form-select-sm">${foamOptions}</select>
              </div>
              <div class="col-sm-6">
                <label class="form-label">Polish / Color</label>
                <select id="optPolish" class="form-select form-select-sm">${polishOptions}</select>
              </div>
            </div>`
          : `<div class="row g-3 mb-3">
              <div class="col-sm-6">
                <label class="form-label">Polish / Color</label>
                <select id="optPolish" class="form-select form-select-sm">${polishOptions}</select>
              </div>
            </div>`
      }

      <p class="modal-delivery"><i class="bi bi-truck me-2"></i>Estimated Delivery: <strong>${p.delivery_time}</strong></p>

      <button class="btn btn-success btn-lg w-100 whatsapp-order-btn mt-2" onclick="orderOnWhatsApp()">
        <i class="bi bi-whatsapp me-2"></i>Order on WhatsApp
      </button>
    </div>
  </div>`;
}

/* ── Gallery Navigation ─────────────────────────── */
function initModalGallery() {
  updateGalleryImage();
}

function galleryNav(dir) {
  if (!currentProduct) return;
  currentImageIndex = (currentImageIndex + dir + currentProduct.images.length) % currentProduct.images.length;
  updateGalleryImage();
}

function galleryGoTo(idx) {
  currentImageIndex = idx;
  updateGalleryImage();
}

function updateGalleryImage() {
  if (!currentProduct) return;
  const mainImg = document.getElementById("modalMainImage");
  const thumbs = document.querySelectorAll("#galleryThumbs img");

  if (mainImg) {
    mainImg.style.opacity = 0;
    setTimeout(() => {
      mainImg.src = currentProduct.images[currentImageIndex];
      mainImg.style.opacity = 1;
    }, 200);
  }
  thumbs.forEach((t, i) => t.classList.toggle("active", i === currentImageIndex));
}

/* ──────────────────────────────────────────────────
   WHATSAPP ORDER GENERATION (CORE BUSINESS LOGIC)
   ────────────────────────────────────────────────── */
function orderOnWhatsApp() {
  if (!currentProduct) return;

  const size = document.getElementById("optSize")?.value || "";
  const wood = document.getElementById("optWood")?.value || "";
  const foam = document.getElementById("optFoam")?.value || "";
  const polish = document.getElementById("optPolish")?.value || "";

  let msg = `Hi! I'm interested in ordering from TipTop Furniture.\n\n`;
  msg += `🪑 *Product:* ${currentProduct.name}\n`;
  if (size) msg += `📐 *Size:* ${size}\n`;
  if (wood) msg += `🪵 *Wood Type:* ${wood}\n`;
  if (foam) msg += `🛋️ *Foam Type:* ${foam}\n`;
  if (polish) msg += `🎨 *Polish/Color:* ${polish}\n`;
  if (currentProduct.price) msg += `💰 *Starting Price:* ${currentProduct.price}\n`;
  msg += `\nPlease share the final quote and delivery details. Thank you!`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

/* General WhatsApp (floating button / hero) */
function openWhatsApp() {
  const msg = `Hi! I'm interested in custom furniture from TipTop Furniture. Please share details.`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

/* ──────────────────────────────────────────────────
   SCROLL ANIMATIONS (Intersection Observer)
   ────────────────────────────────────────────────── */
function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
}

/* ──────────────────────────────────────────────────
   SMOOTH SCROLL for anchors
   ────────────────────────────────────────────────── */
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        // Close mobile nav if open
        const nav = document.querySelector(".navbar-collapse.show");
        if (nav) {
          bootstrap.Collapse.getOrCreateInstance(nav).hide();
        }
      }
    });
  });
}

/* ──────────────────────────────────────────────────
   NAVBAR SHRINK ON SCROLL
   ────────────────────────────────────────────────── */
function setupNavbarShrink() {
  const navbar = document.getElementById("mainNavbar");
  if (!navbar) return;

  const shrinkOn = 60;
  function onScroll() {
    if (window.scrollY > shrinkOn) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ──────────────────────────────────────────────────
   FLOATING WHATSAPP BUTTON
   ────────────────────────────────────────────────── */
function setupFloatingWhatsApp() {
  const btn = document.getElementById("floatingWhatsApp");
  if (!btn) return;

  // Show after small scroll
  window.addEventListener(
    "scroll",
    () => {
      btn.classList.toggle("visible", window.scrollY > 300);
    },
    { passive: true }
  );
}
