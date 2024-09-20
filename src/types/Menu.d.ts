export interface MenuItem {
  id: number;
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
  category: string;
};
