import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import esTextTokens from './es/textTokens.json'

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: esTextTokens,
    },
  },
  lng: 'es',
  fallbackLng: 'es',
  debug: import.meta.env.DEV,

  interpolation: {
    escapeValue: false,
  },

  returnObjects: false,
})

export default i18n