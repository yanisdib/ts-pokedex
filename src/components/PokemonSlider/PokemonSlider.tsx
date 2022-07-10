import { v4 as uuidv4 } from 'uuid';

import { Pokemon } from '../../interfaces/Pokemon';

import { Card, PokemonPreview, Slider } from '..';

import { StyledPokemonSlider, Wrapper } from './PokemonSlider.styled';
import { getPokemonTypeColor } from '../../helpers/utils/colors';


interface Props {
    pokemon: Pokemon[];
}


function PokemonSlider({ pokemon }: Props): JSX.Element {
    return (
        <StyledPokemonSlider>
            <Wrapper>
                <Slider>
                    {pokemon
                        .map(element => (
                            <Card cardColor={getPokemonTypeColor(element.types[0].type.name)}>
                                <PokemonPreview key={uuidv4()} pokemon={element} />
                            </Card>
                        ))
                    }
                </Slider>
            </Wrapper>
        </StyledPokemonSlider>
    );
}


export default PokemonSlider;