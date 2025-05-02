// Translations for detail pages
const pageTranslations = {
  en: {
    // Common elements
    backButton: "← Back to Home",
    stayInformed: "Stay informed and be prepared responsibly.",
    recommendations: "Recommendations for today:",

    // Hot weather page
    hotTitle: "Weather Today: SENATI Heat",
    hotDescription:
      "Today is a hot day at SENATI. To maintain comfort and institutional formality, we recommend wearing the summer uniform: blue institutional polo shirt, dark dress pants, and black formal shoes. This combination will allow you to maintain a professional image while staying cool during your academic activities.",
    hotRecommendations: [
      "Hydration is essential, keep a water bottle with you and drink regularly throughout the day.",
      "Apply sunscreen before going out, especially on your face and arms exposed to the sun.",
      "Your institutional polo shirt should be impeccable, it represents SENATI's image.",
      "During commutes, protect yourself from the sun with dark glasses or a cap in sober colors.",
      "Carry an umbrella or parasol if you're going to walk a lot.",
    ],

    // Cold weather page
    coldTitle: "Weather Today: SENATI Cold",
    coldDescription:
      "Today is a cold day at SENATI. To maintain comfort and formality, we recommend wearing the complete uniform with emphasis on warmth: SENATI institutional jacket, white shirt, institutional tie, dark dress pants, and black formal shoes. This combination will keep you warm and professional throughout your academic day.",
    coldRecommendations: [
      "The temperature is low, the SENATI institutional jacket is essential to maintain your body temperature.",
      "Consider wearing discreet thermal garments under your uniform for greater protection against the cold.",
      "Keep your uniform in excellent condition, especially the jacket which will be your main protection.",
      "For long commutes, complement with warming accessories such as gloves or scarf in sober colors.",
      "Stay hydrated with warm drinks, they will help regulate your body temperature.",
    ],

    // Moderate weather page
    moderateTitle: "Weather Today: SENATI Temperate Day",
    moderateDescription:
      "Today is a temperate day at SENATI. To maintain formality and professionalism, we recommend wearing the complete uniform: institutional blue jacket, white shirt, institutional tie, dark dress pants, and black formal shoes. This attire will allow you to be comfortable during your academic activities.",
    moderateRecommendations: [
      "The weather is variable, consider bringing a light umbrella in case of occasional rain.",
      "The temperature is moderate, the institutional jacket will be sufficient to keep you comfortable.",
      "Keep your uniform in good condition and clean, it reflects SENATI excellence.",
      "Protect your eyes with sunglasses if the sun is strong during the day.",
      "Carry a water bottle with you to stay hydrated.",
    ],
  },
  es: {
    // Common elements
    backButton: "← Volver al Inicio",
    stayInformed: "Mantente siempre informado y prepárate con responsabilidad.",
    recommendations: "Recomendaciones para este día:",

    // Hot weather page
    hotTitle: "Clima del Día: Calor Senatino",
    hotDescription:
      "Hoy se presenta un día caluroso en SENATI. Para mantener el confort y la formalidad institucional, te recomendamos usar el uniforme de verano: polo camisero azul institucional, pantalón de vestir oscuro y zapatos formales negros. Esta combinación te permitirá mantener una imagen profesional mientras te mantienes fresco durante tus actividades académicas.",
    hotRecommendations: [
      "La hidratación es fundamental, mantén contigo una botella de agua y bebe regularmente durante el día.",
      "Aplica protector solar antes de salir, especialmente en rostro y brazos expuestos al sol.",
      "Tu polo camisero institucional debe estar impecable, representa la imagen de SENATI.",
      "Durante los traslados, protégete del sol con lentes oscuros o gorra en colores sobrios.",
      "Lleva paraguas o sombrilla si vas a caminar mucho.",
    ],

    // Cold weather page
    coldTitle: "Clima del Día: Frío Senatino",
    coldDescription:
      "Hoy se presenta un día frío en SENATI. Para mantener el confort y la formalidad, te recomendamos usar el uniforme completo con énfasis en el abrigo: casaca institucional SENATI, camisa blanca, corbata institucional, pantalón de vestir oscuro y zapatos formales negros. Esta combinación te mantendrá abrigado y profesional durante toda tu jornada académica.",
    coldRecommendations: [
      "La temperatura está baja, la casaca institucional SENATI es esencial para mantener tu temperatura corporal.",
      "Considera usar prendas térmicas discretas debajo del uniforme para mayor protección contra el frío.",
      "Mantén tu uniforme en excelente estado, especialmente la casaca que será tu principal protección.",
      "Para los traslados largos, complementa con accesorios abrigadores como guantes o bufanda en colores sobrios.",
      "Mantente hidratado con bebidas tibias, te ayudarán a regular tu temperatura corporal.",
    ],

    // Moderate weather page
    moderateTitle: "Clima del Día: Día Templado Senatino",
    moderateDescription:
      "Hoy se presenta un día templado en SENATI. Para mantener la formalidad y el profesionalismo, te recomendamos usar el uniforme completo: saco azul institucional, camisa blanca, corbata institucional, pantalón de vestir oscuro y zapatos formales negros. Esta vestimenta te permitirá estar cómodo durante tus actividades académicas.",
    moderateRecommendations: [
      "El clima es variable, considera llevar un paraguas ligero por si hay lluvias ocasionales.",
      "La temperatura es moderada, el saco institucional será suficiente para mantenerte confortable.",
      "Mantén tu uniforme en buen estado y limpio, refleja la excelencia SENATI.",
      "Protege tus ojos con lentes de sol si el sol está fuerte durante el día.",
      "Lleva contigo una botella de agua para mantenerte hidratado.",
    ],
  },
};

// Current language (default: Spanish)
let currentPageLanguage = localStorage.getItem("language") || "es";

// Function to update the page language
function updateDetailPageLanguage() {
  // Get the latest language preference
  currentPageLanguage = localStorage.getItem("language") || "es";

  const pagePath = window.location.pathname;

  // Common elements
  document.querySelector(".btn-azul").textContent =
    pageTranslations[currentPageLanguage].backButton;
  document.querySelector(".footer").textContent =
    pageTranslations[currentPageLanguage].stayInformed;
  document.querySelector(".recomendaciones strong").textContent =
    pageTranslations[currentPageLanguage].recommendations;

  // Page specific content
  if (pagePath.includes("calor.html")) {
    document.querySelector("h1").textContent =
      pageTranslations[currentPageLanguage].hotTitle;
    document.querySelector(".contenedor > p").textContent =
      pageTranslations[currentPageLanguage].hotDescription;

    const listItems = document.querySelectorAll(".recomendaciones ul li");
    pageTranslations[currentPageLanguage].hotRecommendations.forEach(
      (text, index) => {
        if (listItems[index]) listItems[index].textContent = text;
      }
    );
  } else if (pagePath.includes("frio.html")) {
    document.querySelector("h1").textContent =
      pageTranslations[currentPageLanguage].coldTitle;
    document.querySelector(".contenedor > p").textContent =
      pageTranslations[currentPageLanguage].coldDescription;

    const listItems = document.querySelectorAll(".recomendaciones ul li");
    pageTranslations[currentPageLanguage].coldRecommendations.forEach(
      (text, index) => {
        if (listItems[index]) listItems[index].textContent = text;
      }
    );
  } else if (pagePath.includes("intermedio.html")) {
    document.querySelector("h1").textContent =
      pageTranslations[currentPageLanguage].moderateTitle;
    document.querySelector(".contenedor > p").textContent =
      pageTranslations[currentPageLanguage].moderateDescription;

    const listItems = document.querySelectorAll(".recomendaciones ul li");
    pageTranslations[currentPageLanguage].moderateRecommendations.forEach(
      (text, index) => {
        if (listItems[index]) listItems[index].textContent = text;
      }
    );
  }

  // Update HTML lang attribute
  document.documentElement.lang = currentPageLanguage;
}

function togglePageLanguage() {
  // Toggle between 'es' and 'en'
  currentPageLanguage = currentPageLanguage === "es" ? "en" : "es";

  // Update the button text
  document.getElementById("languageToggle").textContent =
    currentPageLanguage.toUpperCase();

  // Store the language preference
  localStorage.setItem("language", currentPageLanguage);

  // Update the page content
  updateDetailPageLanguage();
}

document.addEventListener("DOMContentLoaded", function () {
  // Get stored language preference
  const storedLanguage = localStorage.getItem("language");
  if (storedLanguage) {
    currentPageLanguage = storedLanguage;
    document.getElementById("languageToggle").textContent =
      currentPageLanguage.toUpperCase();
  }

  // Add click event listener to the language toggle button
  const languageToggle = document.getElementById("languageToggle");
  if (languageToggle) {
    languageToggle.addEventListener("click", togglePageLanguage);
  }

  // Update the page content with the current language
  updateDetailPageLanguage();
});
