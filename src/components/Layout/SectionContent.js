import styled from 'styled-components';

export const SectionContent = styled.div`
    padding: 3rem 0;
    background-color: #67be9b;
    color: #f9f9f9;
    padding-bottom: 4rem;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);

    @media screen and (min-width: 48rem) {
        padding-bottom: 6rem;
    }
`;
