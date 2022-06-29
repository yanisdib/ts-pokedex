export interface Generation {
    abilities:       any[];
    id:              number;
    main_region:     MainRegion;
    moves:           any[];
    name:            string;
    names:           Name[];
    pokemon_species: PokemonSpecy[];
    types:           PokemonSpecy[];
    version_groups:  PokemonSpecy[];
}

export interface MainRegion {
}

export interface Name {
    language: PokemonSpecy;
    name:     string;
}

export interface PokemonSpecy {
    name: string;
    url:  string;
}
