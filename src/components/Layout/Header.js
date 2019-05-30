import React from 'react';
import styled from 'styled-components';

import { Flexbox } from './Container';
import { Heading1, Heading2 } from '../Typography/Typography';
import { Image } from './Image';
import SergioImage224 from '../../assets/images/sergioCV-h224.jpg';

const HeaderStyles = styled.div`
    height: 224px;
    padding: 0 1rem;
    position: relative;
    background-image: url(${SergioImage224});
    background-repeat: no-repeat;
    background-position: right;
    margin-right: -3rem;
`;

const InnerFlexbox = styled.div`
    height: 224px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Header = () => {
    return (
        <HeaderStyles>
            <Flexbox spaceBetween alignCenter directionColumn>
                <InnerFlexbox>
                    <Heading1>
                        SERGIO<span>CORREIA</span>
                    </Heading1>
                    <Heading2>Frontend Developer &amp; Designer</Heading2>
                </InnerFlexbox>
            </Flexbox>
        </HeaderStyles>
    );
};

export default Header;
