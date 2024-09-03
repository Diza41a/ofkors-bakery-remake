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
];
