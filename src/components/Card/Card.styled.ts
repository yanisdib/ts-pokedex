import styled from 'styled-components';


interface Props {
    cardColor?: string;
}


export const StyledCard = styled.div`
    display: flex;
    justify-content: center;
    width: fit-content;
    height: fit-content;
    min-height: 400px;
    border: ${({
        cardColor
    }: Props) => `solid 2px ${cardColor ?? '#FFFF00'}`};

    @media (min-width: 375px) {
        min-width: 200px;
        border-radius: 15px;
    }

    @media (min-width: 744px) {
        min-width: 220px;
        border-radius: 18px;
    }

    @media (min-width: 950px) {
        min-width: 280px;
        border-radius: 20px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    width: inherit;
    height: inherit;
`;

export const Content = styled.div`
    display: flex;
    row-gap: 20px;
    width: inherit;
    height: inherit;
`;