// Get the current page filename
const currentPage = window.location.pathname.split("/").pop();

setTimeout(() => {
  const h1 = document.querySelector("h1");

  switch (currentPage) {
    case "intermedio.html":
      h1.textContent = "🌤️ ¡Prepárate! Día Intermedio en SENATI";
      break;
    case "frio.html":
      h1.textContent = "❄️ ¡Prepárate! Día Frío en SENATI";
      break;
    case "calor.html":
      h1.textContent = "☀️ ¡Prepárate! Día caluroso en SENATI";
      break;
  }
}, 4000);

const carousel = document.querySelector(".carousel-inner");
const items = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");

let currentIndex = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

// Auto-play cada 5 segundos
setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}, 5000);
