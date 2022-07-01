import styled, { css } from 'styled-components';

interface Props {
    active: boolean;
    animated: boolean;
}


export const SwitchButton = styled.span<Props>`
    position: absolute;
    cursor: pointer;
    ${({animated}: Props) => 
        animated && css`
            animation: animate .3s cubic-bezier(0.4, 0.0, 0.2, 1);
        `
    }

    @media (min-width: 375px) {
        bottom: 65px;
        right: 50%;
        margin: auto;
        font-size: 150%;
    }

    @media (min-width: 950px) {
        bottom: 90px;
        right: 95px;
    }

    &::before {
        ${({active}: Props) =>
            active ? (
                css`content: '🌒';`
            ):(
                css`content: '☀️';`
            )
        }
    }
`;