import styled from 'styled-components';

export const FormContainer = styled.form`
    display: flex;
    padding: 1em;

    flex: 1;
    flex-direction: column;

    & > * {
    margin-bottom: 15px;
    }
`;

export const Box = styled.div`
    align-items: center;
    display: flex;
    width: 700px;
    height: 350px;
    margin: auto;
    border: 1px solid #d3d3d3;
    box-shadow: 0px 0px 100px 100px #d3d3d3;
    background-color: #DE2202;
`;

export const Title = styled.h1`
    margin: 0;
    padding: 30px 5px;
`;

export const ErrorMessage = styled.p`
    color: white;
`;
