import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { Home } from "./pages/Home";
import { BrowserRouter } from 'react-router-dom';
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter> {/*Precisa desse ContextProvider em volta do Router*/}
        <Router />
      </BrowserRouter> 
      <GlobalStyles />
    </ThemeProvider>
    
  )
}