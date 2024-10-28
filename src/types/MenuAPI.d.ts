import type { Menu, MenuItem } from "./Menu";
export type MenusGetResponse = Array<Menu>;

export type MenuItemInputDto = Exclude<MenuItem, 'id'>;
