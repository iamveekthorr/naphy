import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: calc(16rem / 16);
        scroll-behavior: smooth;
    }

    body {
        font-family: 'inter', sans-serif;
        line-height: calc(16.5rem/16);
        position: relative;
        user-select: none;
    }

    a {
        color: currentColor;
        text-decoration: none;
    }

    li {
        list-style: none;
    }
`;

export default GlobalStyles;
