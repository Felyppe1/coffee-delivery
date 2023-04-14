import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        border: none;
    }

    body {
        background-color: ${props => props.theme.background};
        padding: 0 10.3%;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
    }
`