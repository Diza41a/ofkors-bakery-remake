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

import aboutEn from './en/about.json';
import aboutRu from './ru/about.json';
import aboutUk from './uk/about.json';

import galleryEn from './en/gallery.json';
import galleryRu from './ru/gallery.json';
import galleryUk from './uk/gallery.json';

import menuEn from './en/menu.json';
import menuRu from './ru/menu.json';
import menuUk from './uk/menu.json';

import contactEn from './en/contact.json';
import contactRu from './ru/contact.json';
import contactUk from './uk/contact.json';

export type TLanguage = 'en' | 'ru' | 'uk';
export const locales: Array<TLanguage> = ['en', 'ru', 'uk'];

export const resources = {
  en: {
    global: globalEn,
    landing: landingEn,
    about: aboutEn,
    gallery: galleryEn,
    menu: menuEn,
    contact: contactEn,
  },
  ru: {
    global: globalRu,
    landing: landingRu,
    about: aboutRu,
    gallery: galleryRu,
    menu: menuRu,
    contact: contactRu,
  },
  uk: {
    global: globalUk,
    landing: landingUk,
    about: aboutUk,
    gallery: galleryUk,
    menu: menuUk,
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