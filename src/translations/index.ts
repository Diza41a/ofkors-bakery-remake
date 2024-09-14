import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import globalEn from './en/global.json';
import globalRu from './ru/global.json';
import globalUk from './uk/global.json';

import landingEn from './en/landing.json';
import landingRu from './ru/landing.json';
import landingUk from './uk/landing.json';

import contactEn from './en/contact.json';
import contactRu from './ru/contact.json';
import contactUk from './uk/contact.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          global: globalEn,
          landing: landingEn,
          contact: contactEn,
        },
      },
      ru: {
        translation: {
          global: globalRu,
          landing: landingRu,
          contact: contactRu,
        }
      },
      uk: {
        translation: {
          global: globalUk,
          landing: landingUk,
          contact: contactUk,
        }
      },
    },
  });


export default i18n;