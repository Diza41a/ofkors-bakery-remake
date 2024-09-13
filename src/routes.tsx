import LandingPage from './pages/Landing';
import ContactPage from './pages/Contact';

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
    element: <></>,
  },
  {
    path: '/gallery',
    element: <></>,
  },
  {
    path: '/menu',
    element: <></>,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
];
