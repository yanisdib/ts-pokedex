export const getPokemonTypeColor = (type: string): string => {
    const colorSet = {
        bug: '#A8B820',
        dark: '#705848',
        dragon: '#7038F8',
        electric: '#F8D030',
        fairy: '#F8A0E0',
        fighting: '#903028',
        fire: '#F05030',
        flying: '#A890F0',
        ghost: '#705898',
        grass: '#78C850',
        ground: '#E0C068',
        ice: '#98D8D8',
        normal: '#A8A878',
        poison: '#A040A0',
        psychic: '#F85888',
        rock: '#B8A038',
        shadow: '#403246',
        steel: '#B8B8D0',
        unknown: '#68A090',
        water: '#6890F0'
    };

    for (let [key, value] of Object.entries(colorSet)) {
        if (key === type.toLowerCase()) return value;
    }

    return '#EBEBEB';
}