import styled, { css } from 'styled-components';


export const Section = styled.section`
    display: flex;
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 100px;
    overflow-x: hidden;
`;

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: inherit;
    height: inherit;    
    
    h1 {
        position: absolute;
        top: -25px;
        right: 100px;
        text-transform: uppercase;
        font-size: 6em;
        font-weight: 800;
        font-family: var(--info-font);
        animation: 0.8s ease-out 0s 1 slideRightToLeft;
        z-index: 1;
    }
`;


interface IllustrationProps {
    loaded: boolean;
}


export const Illustration = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: inherit;
    background: linear-gradient(
        90deg,
        rgba(255,72,0,1) 0%,
        rgba(236,208,208,1) 60%,
        rgba(192,222,255,1) 70%,
        rgba(136,219,255,1) 100%
    );
	background-size: 400% 400%;
    ${({ loaded }: IllustrationProps) => 
        loaded && (
            css`animation: 0.5s ease-out 0s 1 slideLeftToRight, gradient 8s ease infinite;`
        )
    }
    /* z-index: 999; */

    img {
        width: 95%;
        height: 95%;
        object-fit: cover;
        object-position: center;
    }
`;