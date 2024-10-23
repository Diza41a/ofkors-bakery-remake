import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { ThemeProvider } from "styled-components";
import MainLayout from "./components/MainLayout";
import ScrollToTop from "./components/ScrollToTop";
import AdminLayout from "./components/AdminLayout";
import { ADMIN_ROUTES, USER_ROUTES } from "./routes";
import type { RouteFixture } from "./routes";
import { GlobalContext } from "./contexts/global";
import theme from "./global/theme";
import S from "./global/styles";
import './translations';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isAdminLoggedIn, setAdminIsLoggedIn] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);

  const renderProtectedPageElement = (route: RouteFixture, isLoggedIn: boolean) => {
    if (!isLoggedIn && route.path !== '/admin/login') {
      return <Navigate to="/admin/login" />;
    }
    if (isLoggedIn && route.path === '/admin/login') {
      return <Navigate to="/admin/menus" />;
    }

    return route.element;
  };

  return (
    <GlobalContext.Provider
      value={{
        authState: [isAdminLoggedIn, setAdminIsLoggedIn],
        pageLoadingState: [isPageLoading, setIsPageLoading],
      }}
    >
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ScrollToTop />

          <S.GlobalStyle />
          <S.FontFaces />
          <S.CustomAnimations />

          <Routes>
            <Route element={<MainLayout />}>
              {USER_ROUTES.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Route>
            <Route element={<AdminLayout />}>
              {ADMIN_ROUTES.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={renderProtectedPageElement(route, isAdminLoggedIn)}
                />
              ))}
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </GlobalContext.Provider>
  )
}

export default App
