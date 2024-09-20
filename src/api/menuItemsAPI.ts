// import type { AxiosResponse } from 'axios';
import type { MenuGetResponse } from '../types/MenuAPI.d';
// import api from './api';
import type { MenuItem } from '../types/Menu';

// const ROUTE = '/menu';

export const getMenu = /* async */(): MenuGetResponse => {
  // return api.get(ROUTE);
  const generateMenuItemData = (id: number): MenuItem => ({
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
    category: 'Baked Goods',
  });
  const MENU_ITEMS = Array.from({ length: 10 }, (_, i) => generateMenuItemData(i));

  return MENU_ITEMS;
};