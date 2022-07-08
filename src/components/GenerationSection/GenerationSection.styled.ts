import styled, { css } from 'styled-components';


export const Section = styled.section`
    display: flex;
    width: 100%;
    height: 100vh;
`;

export const Wrapper = styled.div`
    display: flex;
    width: inherit;
    height: inherit;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: inherit;
    height: inherit;
`;


interface IllustrationProps {
    loaded: boolean;
}


export const Illustration = styled.div`
    display: flex;
    width: 50%;
    height: inherit;
    ${({ loaded }: IllustrationProps) => 
        loaded && (
            css`animation: 0.5s ease-out 0s 1 slideLeftToRight;`
        )
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
`;