import React from 'react';
import GlobalStyle from './components/base/GlobalStyles';

import { Container } from './components/Layout/Container';
import Header from './components/Layout/Header';
import { Navigation } from './components/Layout/Navigation';
import { SectionContent } from './components/Layout/SectionContent';
import { Paragraph } from './components/Typography/Typography';

function App() {
    return (
        <div>
            <Navigation />
            <Container>
                <Header />
            </Container>
            <SectionContent>
                <Container>
                    <Paragraph>
                        Sérgio is a Frontend Developer and Designer who loves to
                        be creative and to learn new technologies. He has
                        experience as both Designer and Developer and he loves
                        to work together with a team solving problems, making
                        ideas come to life.
                    </Paragraph>
                </Container>
            </SectionContent>
            <GlobalStyle />
        </div>
    );
}

export default App;
