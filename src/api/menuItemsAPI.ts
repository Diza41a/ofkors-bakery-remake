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
  const generateMenu = (category: MenuCategory, backgroundImageUrl: string): Menu => ({
    id: category.en,
    category,
    items: Array.from({ length: 10 }, (_, i) => generateMenuItem(`${i}`)),
    backgroundImageUrl,
  });
  const menus: MenusGetResponse = [
    generateMenu(
      { en: 'Coffee & Drinks', ru: 'Кофе и Напитки', uk: 'Кофе та Напої' },
      'https://images.squarespace-cdn.com/content/v1/5bfcf0c0710699387b694aa6/1545204092491-5WYQ4VSPNG36D0S7KL20/image-asset.jpeg?format=2500w',
    ),
    generateMenu(
      { en: 'Breakfast & Lunch', ru: 'Обед и Обеденный ужин', uk: 'Обід і Перекладене' },
      'https://images.squarespace-cdn.com/content/v1/64b7e84b7d35650b178680e2/1718186084046-YYBP1JTHZ8C6BER8D70G/vecteezy_croissant-drink-table-bokeh-background-background-bakery_25721028.jpg',
    ),
    generateMenu(
      { en: 'Drinks', ru: 'Напитки', uk: 'Напої' },
      'https://crumblesofhealth.com/wp-content/uploads/2021/04/Savory-Rolls22.jpg',
    ),
    generateMenu(
      { en: 'Desserts', ru: 'Десерты', uk: 'Десерти' },
      'https://wallpapers.com/images/featured/dessert-background-2sps0go2ilc7pbnd.jpg',
    ),
  ];

  return menus;
};