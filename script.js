
const WHATSAPP_NUMBER = "639XXXXXXXXX";

// Automatically update the copyright year
document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

// Send a message through WhatsApp
function sendWhatsApp(message) {
  if (!/^639\d{9}$/.test(WHATSAPP_NUMBER)) {
    alert("Please configure your WhatsApp number in script.js.");
    return;
  }

  const url =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank", "noopener,noreferrer");
}

// Order a specific bouquet
function order(productName) {
  const message =
    `Hello Petal & Pearl! 🌸\n\n` +
    `I would like to order the "${productName}" bouquet.\n` +
    `Could you please provide the ordering details?`;

  sendWhatsApp(message);
}

// Contact the floral boutique
function contactUs(event) {
  if (event) event.preventDefault();

  sendWhatsApp(
    "Hello Petal & Pearl! 🌷 I would like to inquire about your floral arrangements."
  );
}
