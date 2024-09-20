import axios from 'axios';
import Cookies from 'universal-cookie';
export const cookies = new Cookies();

const PRODUCTION_SERVER_URL = 'production-server-url.com';
const DEVELOPMENT_SERVER_URL = 'localhost-server:3000';
const baseURL = process.env.NODE_ENV == 'production' ? PRODUCTION_SERVER_URL : DEVELOPMENT_SERVER_URL;

const api = axios.create({
  baseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    Authorization: `Bearer ${cookies.get('access_token')}`,
  },
});

export default api;
