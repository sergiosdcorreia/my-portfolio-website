import React from 'react';
import styled from 'styled-components';

import { Flexbox } from './Container';
import { Heading1, Heading2 } from '../Typography/Typography';
import { Image } from './Image';
import SergioImage from '../../assets/images/sergioCV.jpg';

const HeaderStyles = styled.div`
    height: 22.4rem;
    padding: 0 1rem;
    position: relative;
    background-image: url(${SergioImage});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 6rem 100%;

    @media screen and (min-width: 22.8rem) {
        background-position: 100% 100%;
    }

    @media screen and (min-width: 36rem) {
        height: 33.6rem;
    }

    @media screen and (min-width: 48rem) {
        height: 44.8rem;
    }
`;

const InnerFlexbox = styled.div`
    height: 22.4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-width: 36rem) {
        height: 33.6rem;
    }

    @media screen and (min-width: 48rem) {
        height: 44.8rem;
    }
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
