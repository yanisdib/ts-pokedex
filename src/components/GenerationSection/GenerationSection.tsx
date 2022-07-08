import { useState } from 'react';
import { Generation } from '../../interfaces/Generation';

import PokemonSlider from '../PokemonSlider/PokemonSlider';

import {
    Content,
    Illustration,
    Section,
    Wrapper
} from './GenerationSection.styled';


interface Props {
    generation: Generation;
}


function GenerationSection({ generation }: Props): JSX.Element {
    const [isBannerLoaded, setIsBannerLoaded] = useState(false);

    return (
        <Section>
            <Wrapper>
                <Content>
                    <Illustration>
                        {/** Dummy data until logic is implemented */}
                        <img
                            alt="Illustration by Nintendo that shows a few Pokémon from the first generation like Pikachu, Pidgey, Rattata and their trainers"
                            onLoad={() => setIsBannerLoaded(true)}
                            src=""
                        />
                    </Illustration>
                    <PokemonSlider />
                </Content>
            </Wrapper>
        </Section>
    );
}


export default GenerationSection;