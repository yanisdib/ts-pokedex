import { useState } from 'react';

import { useGenerationPokemon } from '../../hooks/useGenerationPokemon';

import withStatus from '../../helpers/hocs/withStatus';

import { Pokemon } from '../../interfaces/Pokemon';
import { Generation } from '../../interfaces/Generation';

import PokemonSlider from '../PokemonSlider/PokemonSlider';

import {
    Content,
    Illustration,
    Section,
    Wrapper
} from './GenerationSection.styled';

import generationBanner from '../../assets/images/bg-gen-i.jpg';



interface Props {
    generation: Generation;
}


function GenerationSection({ generation }: Props): JSX.Element {
    const [isBannerLoaded, setIsBannerLoaded] = useState(false);

    const { id, main_region, pokemon_species } = generation;

    const {
        body: generationPokemon,
        error,
        status
    } = useGenerationPokemon(pokemon_species);

    const PokemonSliderWithStatus = withStatus<{ pokemon: Pokemon[] }>(PokemonSlider);

    return (
        <Section>
            <Wrapper>
                <Content>
                    <h1>{`Generation ${id} from ${main_region.name}`}</h1>
                    <Illustration loaded={isBannerLoaded}>
                        {/** Dummy data until logic is implemented */}
                        <img
                            alt="Illustration by Nintendo that shows a few Pokémon from the first generation like Pikachu, Pidgey, Rattata and their trainers"
                            onLoad={() => setIsBannerLoaded(true)}
                            src={generationBanner}
                        />
                    </Illustration>
                    <PokemonSliderWithStatus
                        error={error}
                        status={status}
                        {...{ pokemon: generationPokemon }}
                    />
                </Content>
            </Wrapper>
        </Section>
    );
}


export default GenerationSection;