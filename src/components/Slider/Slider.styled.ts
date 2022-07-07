import styled from 'styled-components';


export const StyledSlider = styled.div`
    display: flex;
    width: 100%;
    min-width: 450px;
    height: fit-content;
    min-height: 250px;
    overflow: hidden;
`;

export const Wrapper = styled.div`
    display: flex;
    width: inherit;
    height: inherit;
`;


interface ContentProps {
    translateValue: number;
}


export const Content = styled.div`
    display: flex;
    column-gap: var(--ui-gutter-x);
    justify-content: flex-start;
    align-items: center;
    width: fit-content;
    height: inherit;
    padding: var(--ui-gutter-y) 0;
    transform: translateX(${({ 
        translateValue
    }: ContentProps) => `-${translateValue}`}px);
    transition: transform ease-in 0.6s;
    transition-timing-function: cubic-bezier(0.15, 0, 0, 1);
    will-change: transform;
`;