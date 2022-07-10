import { getPokemonTypeColor } from '../../helpers/utils/colors';
import { toPascalCase } from '../../helpers/utils/strings';

import { Pokemon } from '../../interfaces/Pokemon';

import Tag from '../Tag/Tag';

import {
    PokemonDataGrid,
    PokemonIdentity,
    PokemonIllustation
} from './PokemonPreview.styled';


interface Props {
    pokemon: Pokemon;
}


function PokemonPreview({ pokemon }: Props): JSX.Element {
    const { id, name, sprites, types } = pokemon;

    const pokemonTypeColor: string = getPokemonTypeColor(types[0].type.name);

    return (
        <>
            <PokemonIdentity>
                <Tag backgroundColor={getPokemonTypeColor(types[0].type.name)}>{id}</Tag>
                <h5>{toPascalCase(name)}</h5>
            </PokemonIdentity>
            <PokemonIllustation backgroundColor={pokemonTypeColor}>
                <img
                    alt={`Pokémon n°${id} called ${name} according to the Pokédex`}
                    src={sprites.other?.['official-artwork'].front_default}
                    title={`Official artwork of Pokémon n°${id} ${name} - Design by Nintendo and GameFreak`}
                />
            </PokemonIllustation>
            <PokemonDataGrid>
            </PokemonDataGrid>
        </>
    );
}


export default PokemonPreview;