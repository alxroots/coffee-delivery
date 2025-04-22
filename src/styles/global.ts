import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    :focus {
        outline: 2px solid ${(props) => props.theme.colors.product.purple};
        outline-offset: -2px;
    }
    
    
    body {
        background-color: ${(props) => props.theme.colors.base.background};
        color: ${(props) => props.theme.colors.base.text};
        font-family: ${(props) => props.theme.fonts.text};
        -webkit-font-smoothing: antialiased;
        line-height: ${(props) => props.theme.lineHeights.base};
    }
    
    body, input, textarea, button {
        font-family: ${(props) => props.theme.fonts.text};
        font-weight: ${(props) => props.theme.fontWeights.regular};
        font-size: ${(props) => props.theme.fontSizes.textM};
    }
    
    button {
        cursor: pointer;
        border: none;
    }
    
    a {
        text-decoration: none;
        color: inherit;
    }
    
    ul, ol {
        list-style: none;
    }
    
    html {
        scroll-behavior: smooth;
    }
`;
