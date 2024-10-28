import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getMenus } from '../api/menuItemsAPI';
import type { MenusGetResponse } from '../types/MenuAPI';

type QueryResult = Omit<UseQueryResult<unknown, unknown>, 'data'> & {
  menus: MenusGetResponse;
};

const useMenus = (): QueryResult => {
  const { data: { data: menus } = { data: [] }, ...metaProps } = useQuery({
    queryKey: ['menus'],
    queryFn: () => getMenus(),
  });

  return { menus, ...metaProps };
};

export default useMenus;
