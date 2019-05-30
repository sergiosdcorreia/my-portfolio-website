import React from 'react';
import styled from 'styled-components';

import { Flexbox } from './Container';
import { Heading1, Heading2 } from '../Typography/Typography';
import { Image } from './Image';
import SergioImage from '../../assets/images/sergioCV.jpg';

const HeaderStyles = styled.div`
    height: 224px;
    padding: 0 1rem;
    position: relative;
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
                <Image src={SergioImage} alt="Sergio Correia" />
            </Flexbox>
        </HeaderStyles>
    );
};

export default Header;
