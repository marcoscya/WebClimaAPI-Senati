// Translations object
const translations = {
  en: {
    title: "Discover the Weather at your SENATI Campus",
    subtitle: "Find updated meteorological information for your campus",
    loading: "Loading...",
    viewDetails: "View details",
    recommendation: "Recommendation: ",
    weatherDescriptions: {
      Despejado: "Clear",
      "Parcialmente nublado": "Partly cloudy",
      Nublado: "Cloudy",
      "Lluvia ligera": "Light rain",
      "Clima desconocido": "Unknown weather",
    },
    clothingRecommendations: {
      "Recomendación: Usa ropa ligera": "Recommendation: Wear light clothing",
      "Recomendación: Lleva un suéter ligero":
        "Recommendation: Bring a light sweater",
      "Recomendación: Lleva un abrigo ligero":
        "Recommendation: Bring a light coat",
      "Recomendación: Lleva paraguas": "Recommendation: Bring an umbrella",
      "Recomendación: Consulta el clima más tarde":
        "Recommendation: Check the weather later",
    },
  },
  es: {
    title: "Descubre el Clima en tu Sede SENATI",
    subtitle: "Encuentra la información meteorológica actualizada de tu campus",
    loading: "Cargando...",
    viewDetails: "Ver detalles",
    recommendation: "Recomendación: ",
    weatherDescriptions: {
      Clear: "Despejado",
      "Partly cloudy": "Parcialmente nublado",
      Cloudy: "Nublado",
      "Light rain": "Lluvia ligera",
      "Unknown weather": "Clima desconocido",
    },
    clothingRecommendations: {
      "Recommendation: Wear light clothing": "Recomendación: Usa ropa ligera",
      "Recommendation: Bring a light sweater":
        "Recomendación: Lleva un suéter ligero",
      "Recommendation: Bring a light coat":
        "Recomendación: Lleva un abrigo ligero",
      "Recommendation: Bring an umbrella": "Recomendación: Lleva paraguas",
      "Recommendation: Check the weather later":
        "Recomendación: Consulta el clima más tarde",
    },
  },
};

// Current language (default: Spanish)
let currentLanguage = "es";

// Function to toggle language
function toggleLanguage() {
  currentLanguage = currentLanguage === "es" ? "en" : "es";
  document.getElementById("languageToggle").textContent =
    currentLanguage.toUpperCase();

  // Store language preference in localStorage
  localStorage.setItem("language", currentLanguage);

  updatePageLanguage();
}

// Function to update the page language
function updatePageLanguage() {
  // Update main title and subtitle
  const mainTitle = document.querySelector("h1");
  mainTitle.innerHTML =
    translations[currentLanguage].title +
    "<br>" +
    `<span style="font-size: 24px; opacity: 0.9; font-weight: normal; display: block; margin-top: 10px;">
            ${translations[currentLanguage].subtitle}
        </span>`;

  // Update all buttons
  const buttons = document.querySelectorAll("button:not(#languageToggle)");
  buttons.forEach((button) => {
    if (
      button.textContent === "Ver detalles" ||
      button.textContent === "View details"
    ) {
      button.textContent = translations[currentLanguage].viewDetails;
    }
  });

  // Update loading text
  const loadingElements = document.querySelectorAll(
    ".temperature, .weather-info p, .clothing-recommendation"
  );
  loadingElements.forEach((element) => {
    if (
      element.textContent === "Cargando..." ||
      element.textContent === "Loading..."
    ) {
      element.textContent = translations[currentLanguage].loading;
    }
  });

  // Update weather descriptions and recommendations
  const descriptions = document.querySelectorAll('[id^="description"]');
  descriptions.forEach((desc) => {
    const text = desc.textContent;
    if (text !== "Cargando..." && text !== "Loading...") {
      const translatedText =
        translations[currentLanguage].weatherDescriptions[text] || text;
      desc.textContent = translatedText;
    }
  });

  const recommendations = document.querySelectorAll('[id^="recommendation"]');
  recommendations.forEach((rec) => {
    const text = rec.textContent;
    if (text !== "Cargando..." && text !== "Loading...") {
      const translatedText =
        translations[currentLanguage].clothingRecommendations[text] || text;
      rec.textContent = translatedText;
    }
  });
}

// Initialize language toggle button
document.addEventListener("DOMContentLoaded", function () {
  const storedLanguage = localStorage.getItem("language");
  if (storedLanguage) {
    currentLanguage = storedLanguage;
    document.getElementById("languageToggle").textContent =
      currentLanguage.toUpperCase();
    updatePageLanguage();
  }

  const languageToggle = document.getElementById("languageToggle");
  languageToggle.addEventListener("click", toggleLanguage);
});
