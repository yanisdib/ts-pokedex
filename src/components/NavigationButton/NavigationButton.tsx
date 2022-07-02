import { ChevronLeft, ChevronRight } from '@styled-icons/heroicons-outline';

import { Button } from './NavigationButton.styled';


interface Props {
    isNext?: boolean;
    onClick?: () => void;
}


function NavigationButton({
    isNext = true,
    onClick
}: Props): JSX.Element {
    return (
        <Button onClick={onClick}>
            {isNext ? <ChevronRight /> : <ChevronLeft />}
        </Button>
    );
}


export default NavigationButton;