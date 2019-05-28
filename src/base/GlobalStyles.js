import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap');
    body {
        font-family: Lato, sans-serif;
        font-size: 62.5%;
        margin: 0;
        padding: 0;
    }

    *, *:after, *:before {
        box-sizing: border-box;
    }
`;
export default GlobalStyle;
