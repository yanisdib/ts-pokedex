import { useContext } from 'react';

import { DarkModeContext } from '../../contexts/DarkModeContext';

import { playConfirmSound } from '../../helpers/utils/sounds';

import { ThemeSwitch } from '..';

import {
    Branding,
    Section,
    StartButton,
    Title,
    Wrapper
} from './Hero.styled';


function Hero(): JSX.Element {
    const setDarkMode = useContext(DarkModeContext);

    return (
        <Section>
            <Wrapper>
                <Title>
                    <h1>Pokémon</h1>
                </Title>
                <StartButton onClick={playConfirmSound}>
                    Press start
                </StartButton>
                <Branding>
                    <ThemeSwitch onClick={setDarkMode} />
                    <h2>ポケットモンスター Pokédex ® 1995</h2>
                </Branding>
            </Wrapper>
        </Section>
    );
}


export default Hero;