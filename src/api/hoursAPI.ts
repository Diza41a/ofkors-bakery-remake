import api from './api';
import type { AxiosResponse } from 'axios';
import type { HoursOfOperation } from '../types/HoursOfOperation';

const ROUTE = '/hours_of_operation';

export const getHoursOfOperation = (): Promise<AxiosResponse<HoursOfOperation>> => {
  return api.get(ROUTE);
};