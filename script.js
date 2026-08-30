// MENÚ RESPONSIVO
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// AÑO AUTOMÁTICO DEL FOOTER
document.getElementById("year").textContent = new Date().getFullYear();

// FORMULARIO HACIA WHATSAPP
// IMPORTANTE: cambia este número por el del kinder.
// Formato: código de país + número, sin +, espacios ni guiones.
// Ejemplo México: 5215512345678
const whatsappNumber = "521XXXXXXXXXX";

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  const text =
    `Hola, soy ${name}.%0A` +
    `Mi teléfono es: ${phone}.%0A` +
    `Me gustaría recibir información sobre el kinder.%0A` +
    `${message ? "Mensaje: " + message : ""}`;

  const url = `https://wa.me/${whatsappNumber}?text=${text}`;
  window.open(url, "_blank");
});
