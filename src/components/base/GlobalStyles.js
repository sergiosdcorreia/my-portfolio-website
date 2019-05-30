import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap');
    body {
        background-color: #f9f9f9;
        font-family: Lato, sans-serif;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
    }

    *, *:after, *:before {
        box-sizing: border-box;
    }
`;
export default GlobalStyle;
