import { ProgressIndicator, StyledProgressBar } from './ProgressBar.styled';


interface Props {
    progressValue: number;
}


function ProgressBar({ progressValue }: Props): JSX.Element {
    return (
        <>
            <StyledProgressBar progressValue={progressValue} />
            <ProgressIndicator>
                {progressValue < 100 ? (
                    `${progressValue.toFixed(0)}%`
                ) : (
                    'COMPLETE'
                )}
            </ProgressIndicator>
        </>
    );
}


export default ProgressBar;