import styled from 'styled-components';


interface ProgressBarProps {
    progressValue: number;
}


export const StyledProgressBar = styled.div`
    display: flex;
    width: 80%;
    height: 18px;
    border: 2px solid #E0E0E0;
    border-radius: 20px;

    &::before {
        content: "";
        width: ${({ 
            progressValue
        }: ProgressBarProps) => progressValue}%;
        left: 0;
        background-color: red;
        transition: width 0.2s ease-in;
        border-radius: 20px;
    }
`;

export const ProgressIndicator = styled.span`
    font-family: var(--info-font);
    font-weight: 500;
`;