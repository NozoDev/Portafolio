import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./language/en.json";
import esTranslation from "./language/es.json";

i18n
  .use(initReactI18next) // Conectar con React
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
    lng: "en", // Idioma predeterminado
    fallbackLng: "en", // Idioma de respaldo
  });

export default i18n;
