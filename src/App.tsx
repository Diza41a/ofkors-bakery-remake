import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import S from "./global/styles";
import theme from "./global/theme";
import MainLayout from "./components/MainLayout";
import { USER_ROUTES } from "./routes";
import './translations';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
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
