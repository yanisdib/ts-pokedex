import styled from 'styled-components';


export const Button = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 45px;
    min-height: 45px;
    border: 2px solid red;
    border-radius: 50px;
    cursor: pointer;
    
    svg {
        height: 25px;
        fill: red;
        stroke: red;
        stroke-width: 2;
    }
`;
