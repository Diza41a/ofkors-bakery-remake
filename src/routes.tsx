import LandingPage from './pages/Landing';

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
    path: '/services',
    element: <></>,
  },
  {
    path: '/menu',
    element: <></>,
  },
  {
    path: '/contact',
    element: <></>,
  },
];
