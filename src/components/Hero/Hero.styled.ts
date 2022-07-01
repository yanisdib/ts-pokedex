import styled, { css } from 'styled-components';


const heading = css`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    height: 50%;
`;

export const Section = styled.section`
    display: flex;
    position: relative;
    flex-direction: row;
    width: 100%;
    height: 94vh;
    margin-bottom: 50px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: inherit;
    height: 100%;
`;

export const Title = styled.div`
    ${heading};

    h1 {
        @media (min-width: 375px) {
            width: 100%;
            font-size: 5em;
            font-weight: 800;
            text-align: center;
            text-transform: uppercase;
            margin: 20px 0px;
        }

        @media (min-width: 950px) {
            font-size: 8em;
            margin: 30px 100px;
        }

        @media (min-width: 1128px) {
            text-align: end;
        }

        @media (min-width: 1814px) {
            text-align: end;
        }
    }
`;

export const Branding = styled.div`
    ${heading};

    align-items: flex-end;

    svg {
        height: 30px;
        fill: var(--ui-content-color);
    }

    h2 {
        @media (min-width: 375px) {
            width: 100%;
            font-size: 1em;
            font-weight: 700;
            text-align: center;
            text-transform: uppercase;
            margin: 20px 0;
        }

        @media (min-width: 950px) {
            width: 100%;
            font-size: 1.2em;
            text-align: end;
            margin: 20px 100px;
        }

        @media (min-width: 1128px) {
            width: 15%;
        }

        @media (min-width: 1814px) {
            width: 10%;
        }
    }
`;


interface StartButtonProps {
    onClick?: () => void;
}


export const StartButton = styled.button<StartButtonProps>`
    display: flex;
    align-self: center;
    justify-content: center;
    width: 250px;
    height: fit-content;
    background-color: transparent;
    font-family: var(--pixel-font);
    font-size: 1em;
    color: var(--ui-content-color);
    text-transform: uppercase;
    animation: blinker 1.3s linear infinite;
`;