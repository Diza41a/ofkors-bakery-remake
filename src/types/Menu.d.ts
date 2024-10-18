export type MenuCategoryEn = 'Coffee & Drinks' | 'Breakfast & Lunch' | 'Drinks' | 'Desserts';

export interface MenuCategory {
  en: MenuCategoryEn;
  ru: string;
  uk: string;
}

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
  id: string;
  category: MenuCategory;
  items: MenuItem[];
};
