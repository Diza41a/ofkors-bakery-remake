import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import landingEn from './en/landing.json';
import landingRu from './ru/landing.json';
import landingUk from './uk/landing.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: {
          landing: landingEn,
        },
      },
      ru: {
        translation: {
          landing: landingRu,
        }
      },
      uk: {
        translation: {
          landing: landingUk,
        }
      },
    },
  });


export default i18n;