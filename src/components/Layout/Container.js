import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

export const Flexbox = styled.div`
    display: flex;

    justify-content: ${props =>
        props.spaceBetween ? 'space-between' : 'flex-start'};
    align-content: ${props => (props.alignCenter ? 'center' : 'stretch')};
    flex-direction: ${props => (props.directionColumn ? 'column' : 'row')};
`;
