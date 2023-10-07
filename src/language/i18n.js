import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./translations/en.json";
import esTranslation from "./translations/es.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    es: {
      translation: esTranslation,
    },
  },
  lng: "en", // Idioma predeterminado
  fallbackLng: "en", // Idioma de respaldo si no se encuentra la traducción
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
