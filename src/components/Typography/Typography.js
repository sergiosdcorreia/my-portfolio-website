import styled from 'styled-components';

export const Heading1 = styled.h1`
    font-size: 1.8rem;
    font-weight: 600;
    color: #515554;
    margin: 0 0 0.6rem 0;

    span {
        font-weight: 300;
    }

    @media screen and (min-width: 36rem) {
        font-size: 3.3rem;
    }

    @media screen and (min-width: 48rem) {
        font-size: 4.4rem;
    }
`;

export const Heading2 = styled.h2`
    font-size: 0.9rem;
    font-weight: 400;
    color: #515554;
    margin: 0;
    text-transform: uppercase;

    @media screen and (min-width: 36rem) {
        font-size: 1.6rem;
    }

    @media screen and (min-width: 48rem) {
        font-size: 2.2rem;
    }
`;

export const Paragraph = styled.p`
    color: #f9f9f9;
    font-size: 0.7rem;
    line-height: 1.5;
    padding: 0 1rem;

    @media screen and (min-width: 36rem) {
        font-size: 1.3rem;
    }

    @media screen and (min-width: 48rem) {
        font-size: 3.2rem;
    }
`;
