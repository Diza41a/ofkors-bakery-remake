import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import GlobalStyle from "./global/styles";
import theme from "./global/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  )
}

export default App
