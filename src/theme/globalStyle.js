import { injectGlobal } from 'styled-components';

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap');

    body {
        padding: 0;
        margin: 0;
        font-family: 'Lato', sans-serif;
        font-size: 100%;
    }

    *, *:before, *:after {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }
`;
