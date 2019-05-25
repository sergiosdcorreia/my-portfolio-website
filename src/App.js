import React from 'react';
import styled from 'styled-components';

const AppStyled = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    background-color: #f9f9f9;
`;

function App() {
    return (
        <AppStyled>
            <h1>SERGIOCORREIA</h1>
            <h2>Frontend Designer</h2>
        </AppStyled>
    );
}

export default App;
