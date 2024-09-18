import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import MainLayout from "./components/MainLayout";
import ScrollToTop from "./components/ScrollToTop";
import { USER_ROUTES } from "./routes";
import theme from "./global/theme";
import S from "./global/styles";
import './translations';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
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
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
