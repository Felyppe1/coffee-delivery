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
        padding: 0 10.3% 8rem 10.3%;
        max-width: 1700px;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
    }

    @media (max-width: 380px) {
        padding: 0 1.3rem 8rem 1.3rem;
    }
`