import { ThemeProvider } from "styled-components";
import { Router } from "./Router";
import { BrowserRouter } from 'react-router-dom';
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { ProductsContextProvider } from "./contexts/ProductsContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter> {/*Precisa desse ContextProvider em volta do Router*/}
        <ProductsContextProvider>
          <Router />
        </ProductsContextProvider>
      </BrowserRouter> 
      <GlobalStyles />
    </ThemeProvider>
    
  )
}