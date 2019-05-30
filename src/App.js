import React from 'react';
import GlobalStyle from './components/base/GlobalStyles';

import { Container } from './components/Layout/Container';
import Header from './components/Layout/Header';
import { Navigation } from './components/Layout/Navigation';

function App() {
    return (
        <div>
            <Navigation />
            <Container>
                <Header />
                <GlobalStyle />
            </Container>
        </div>
    );
}

export default App;
