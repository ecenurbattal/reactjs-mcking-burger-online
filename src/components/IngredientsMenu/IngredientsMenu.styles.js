import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #DE2202;
    color: white;
    padding: 0.5em 1em;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const ItemWrapper = styled.div`
    width: 50%;
`;

export const ItemContent = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
`;