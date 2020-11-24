import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    justify-content: center;
`;

export const BurgerStyle = styled.div`
    width: 700px;
    height: 600px;
`;

export const BreadTop = styled.div`
    height: 20%;
    width: 80%;
    background: linear-gradient(#bc581e, #e27b36);
    border-radius: 50% 50% 0 0;
    box-shadow: inset -15px 0 #c15711;
    margin: 2% auto;
    position: relative;
`;

export const BreadBottom = styled.div`
    height: 13%;
    width: 80%;
    background: linear-gradient(#f08e4a, #e27b36);
    border-radius: 0 0 30px 30px;
    box-shadow: inset -15px 0 #c15711;
    margin: 2% auto;
`