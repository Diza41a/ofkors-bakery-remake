// import type { AxiosResponse } from 'axios';
import type { MenusGetResponse } from '../types/MenuAPI.d';
// import api from './api';
import type { Menu, MenuCategory, MenuItem } from '../types/Menu';

// const ROUTE = '/menu';

export const getMenus = /* async */(): MenusGetResponse => {
  // return api.get(ROUTE);
  const generateMenuItem = (id: string): MenuItem => ({
    id,
    name: {
      en: 'Coffee Americano',
      ru: 'Американо',
      uk: 'Американо',
    },
    description: {
      en: 'A smooth cup of coffee with hot water.',
      ru: 'Мягкий кофе с горячим водой.',
      uk: 'М\'ягкий кофе з горячим водою.',
    },
    price: 2.99,
    category: {
      en: 'Coffee & Drinks',
      ru: 'Кофе и Напитки',
      uk: 'Кофе та Напої',
    },
  });
  const generateMenu = (category: MenuCategory): Menu => ({
    id: category.en,
    category,
    items: Array.from({ length: 10 }, (_, i) => generateMenuItem(`${i}`)),
  });
  const menus: MenusGetResponse = [
    generateMenu(
      { en: 'Coffee & Drinks', ru: 'Кофе и Напитки', uk: 'Кофе та Напої' },
    ),
    generateMenu(
      { en: 'Breakfast & Lunch', ru: 'Обед и Обеденный ужин', uk: 'Обід і Перекладене' },
    ),
    generateMenu(
      { en: 'Drinks', ru: 'Напитки', uk: 'Напої' },
    ),
    generateMenu(
      { en: 'Desserts', ru: 'Десерты', uk: 'Десерти' },
    ),
  ];

  return menus;
};