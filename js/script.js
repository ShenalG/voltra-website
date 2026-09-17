/* =========================================================
   Voltra — page navigation
   Swaps between Home / Televisions / About Us without a full
   page reload, using the URL hash (#home, #televisions, #about).
   ========================================================= */

// The three pages, and every nav link that points at a page.
const pages = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll(".nav__link");
const pageLabel = document.getElementById("currentPageLabel");

// Which page IDs are valid. Fallback is "home".
const validPages = ["home", "televisions", "about"];

/**
 * Show one page and hide the rest, then update all the UI feedback:
 * the active nav pill, the "You are here" label, and the tab title.
 */
function showPage(pageId) {
  // Guard: if the hash is unknown or empty, default to home.
  if (!validPages.includes(pageId)) {
    pageId = "home";
  }

  // 1) Toggle the pages.
  pages.forEach((page) => {
    page.classList.toggle("is-active", page.id === pageId);
  });

  // 2) Toggle the active nav link (current-page feedback).
  navLinks.forEach((link) => {
    const isCurrent = link.dataset.page === pageId;
    link.classList.toggle("is-active", isCurrent);
    // Accessibility: announce the current page to screen readers.
    if (isCurrent) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  // 3) Update the "You are here" label + document title.
  const activePage = document.getElementById(pageId);
  const title = activePage ? activePage.dataset.title : "Home";
  if (pageLabel) pageLabel.textContent = title;
  document.title = `Voltra | ${title}`;

  // Scroll back to the top so a new page starts at the top.
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * Read the current hash (minus the "#") and show that page.
 */
function routeFromHash() {
  const pageId = window.location.hash.replace("#", "");
  showPage(pageId);
}

// Any element with data-page updates the hash when clicked
// (nav links, the logo, and the in-page buttons).
document.querySelectorAll("[data-page]").forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.hash = el.dataset.page;
  });
});

// Logo click always returns to Home.
const logoLink = document.getElementById("logoLink");
if (logoLink) {
  logoLink.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.hash = "home";
  });
}

// React whenever the hash changes (clicks, back/forward buttons).
window.addEventListener("hashchange", routeFromHash);

// On first load: show the page from the hash, or Home by default.
routeFromHash();

// Footer: fill in the current year automatically.
const yearSpan = document.getElementById("year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

/* =========================================================
   Energy cost calculator (Home page)
   kWh/day  = watts × hours ÷ 1000
   kWh/year = kWh/day × 365
   cost/year = kWh/year × rate ($ per kWh)
   ========================================================= */
const applianceSelect = document.getElementById("applianceSelect");
const wattsInput = document.getElementById("watts");
const hoursInput = document.getElementById("hours");
const rateInput = document.getElementById("rate");
const outDaily = document.getElementById("outDaily");
const outAnnual = document.getElementById("outAnnual");
const outCost = document.getElementById("outCost");

function calculate() {
  const watts = parseFloat(wattsInput.value) || 0;
  const hours = parseFloat(hoursInput.value) || 0;
  const rate = parseFloat(rateInput.value) || 0;

  const dailyKwh = (watts * hours) / 1000;
  const annualKwh = dailyKwh * 365;
  const annualCost = annualKwh * rate;

  outDaily.textContent = dailyKwh.toFixed(2);
  outAnnual.textContent = annualKwh.toFixed(0);
  outCost.textContent = "$" + annualCost.toFixed(2);
}

// Choosing a preset appliance fills in its typical wattage.
if (applianceSelect) {
  applianceSelect.addEventListener("change", () => {
    if (applianceSelect.value !== "custom") {
      wattsInput.value = applianceSelect.value;
    }
    calculate();
  });
}

// Recalculate live as the user edits any field.
[wattsInput, hoursInput, rateInput].forEach((input) => {
  if (input) input.addEventListener("input", calculate);
});

// Run once on load so the results aren't empty.
if (wattsInput) calculate();
