export type MenuCategory = 'coffee_and_drinks' | 'baked_goods' | 'breakfast_and_lunch' | 'desserts';

export interface MenuItem {
  id: string;
  name: {
    en: string;
    ru: string;
    uk: string;
  };
  description: {
    en: string;
    ru: string;
    uk: string;
  };
  price: number;
  category: MenuCategory;
};

export type Menu = {
  category: MenuCategory;
  items: MenuItem[];
};
