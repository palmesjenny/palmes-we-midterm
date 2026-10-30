
// ==============================
// DARK MODE FUNCTION
// ==============================

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const button = document.querySelector(".dark-toggle");

  if (document.body.classList.contains("dark-mode")) {
    button.innerHTML = "☀️ Light Mode";
  } else {
    button.innerHTML = "🌙 Dark Mode";
  }
}


// ==============================
// WHATSAPP ORDER FUNCTION
// ==============================

const WHATSAPP_NUMBER = "639171234567";

function order(productName) {
  const message =
    "Hello Petal & Pearl! I would like to order " +
    productName +
    ". Please share the ordering details.";

  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank");
}
