import LandingPage from './pages/Landing';
import AboutPage from './pages/About';
import GalleryPage from './pages/Gallery';
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
    element: <AboutPage />,
  },
  {
    path: '/gallery',
    element: <GalleryPage />,
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
