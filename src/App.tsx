import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import S from "./global/styles";
import theme from "./global/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <S.GlobalStyle />
      <S.FontFaces />

      <Header />
      <div style={{ height: '300vh' }} />
    </ThemeProvider>
  )
}

export default App
