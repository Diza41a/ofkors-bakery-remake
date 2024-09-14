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

export const resources = {
  en: {
    global: globalEn,
    landing: landingEn,
    contact: contactEn,
  },
  ru: {
    global: globalRu,
    landing: landingRu,
    contact: contactRu,
  },
  uk: {
    global: globalUk,
    landing: landingUk,
    contact: contactUk,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'en',
    keySeparator: ':',
    resources,
  });


export default i18n;