import type { AxiosResponse } from 'axios';
import type { MenuItemInputDto, MenusGetResponse } from '../types/MenuAPI.d';
import api from './api';
import type { MenuItem } from '../types/Menu';

const ROUTE = '/menu_items';

export const getMenus = (): Promise<AxiosResponse<MenusGetResponse>> => {
  const route = `${ROUTE}/menus`;
  return api.get(route);
};

export const createMenuItem = async (menuItemInputDto: MenuItemInputDto): Promise<AxiosResponse<MenuItem>> => {
  return api.post(ROUTE, menuItemInputDto);
};
