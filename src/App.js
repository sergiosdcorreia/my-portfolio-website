import React from 'react';
import GlobalStyle from './components/base/GlobalStyles';
import { Heading1, Heading2 } from './components/Typography/Typography';
import { Container, Flexbox } from './components/Layout/Container';
import { Header } from './components/Layout/Header';
import { Navigation } from './components/Layout/Navigation';
import { Image } from './components/Layout/Image';
import SergioImage from './assets/images/sergioCV.jpg';

function App() {
    return (
        <div>
            <Navigation />
            <Container>
                <Header>
                    <Flexbox spaceBetween alignCenter>
                        <div>
                            <Heading1>
                                SERGIO<span>CORREIA</span>
                            </Heading1>
                            <Heading2>
                                Frontend Developer &amp; Designer
                            </Heading2>
                        </div>
                        <Image src={SergioImage} alt="Sergio Correia" />
                    </Flexbox>
                </Header>
                <GlobalStyle />
            </Container>
        </div>
    );
}

export default App;
