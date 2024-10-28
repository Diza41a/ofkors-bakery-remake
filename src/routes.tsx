import LandingPage from './pages/Landing';
import AboutPage from './pages/About';
import GalleryPage from './pages/Gallery';
import MenuPage from './pages/Menu';
import ContactPage from './pages/Contact';
import AdminLoginPage from './pages/AdminLogin';
import { Navigate } from 'react-router-dom';
import AdminMenus from './pages/AdminMenus';

export type RouteFixture = {
  path: string;
  element: JSX.Element;
};

export const USER_ROUTES: Array<RouteFixture> = [
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/gallery',
    element: <GalleryPage />,
  },
  {
    path: '/menu',
    element: <MenuPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
];

export const ADMIN_ROUTES: Array<RouteFixture> = [
  {
    path: '/admin/login',
    element: <AdminLoginPage />,
  },
  {
    path: '/admin',
    element: <Navigate to={"/admin/menus"} />,
  },
  {
    path: '/admin/menus',
    element: <AdminMenus />,
  },
];
