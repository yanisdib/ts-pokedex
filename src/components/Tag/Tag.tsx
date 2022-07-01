import styled, { css } from 'styled-components';


interface Props {
    children?: React.ReactNode;
    backgroundColor?: string;
}


export default styled.div<Props>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    min-width: 50px;
    height: fit-content;
    padding: 3px 10px;
    ${({backgroundColor}: Props) => css`
        background-image: radial-gradient(#ffffff2d 10%, transparent 10%);
        background-color: ${ backgroundColor ?? '#a8a8a8' };
    `}
    background-position: 0 0, 50px 50px;
    background-size: 5px 5px;
    font-family: var(--info-font);
    font-size: 0.8em;
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 1px 0px 1px #464444;
    color: #FFF;
    border-radius: 10px;
`;