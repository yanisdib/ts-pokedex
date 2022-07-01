import { useState } from 'react';

import { playConfirmSound } from '../../helpers/utils/sounds';

import { SwitchButton } from './ThemeSwitch.styled';


interface Props {
    onClick: (event: React.MouseEvent) => void;
}


function ThemeSwitch({
    onClick: handleClick
}: Props): JSX.Element {
    const [isSwitched, setIsSwitched] = useState(false);
    const [isAnimated, setIsAnimated] = useState(false);

    return (
        <SwitchButton
            active={isSwitched}
            animated={isAnimated}
            onClick={(event: React.MouseEvent) => {
                playConfirmSound();

                setIsAnimated(true);

                setTimeout(() => setIsSwitched(prevState => !prevState), 150);
                setTimeout(() => handleClick(event), 155);
                setTimeout(() => setIsAnimated(false), 300);
            }}
        />
    );
}


export default ThemeSwitch;