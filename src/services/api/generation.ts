import axios, { AxiosResponse } from 'axios';

import { fetchPokemonSpeciesByUrl } from './pokemon-species';

import { Generation } from '../../interfaces/Generation';
import { PokemonSpecies } from '../../interfaces/PokemonSpecies';
import { Species } from '../../interfaces/Pokemon';


const ROOT_URL = process.env.REACT_APP_API_URL;


export const fetchGenerationById = async (id: number): Promise<Generation> => {
    try {
        const response: AxiosResponse<Generation> = await axios.get(`${ROOT_URL}generation/${id}`);
        const generation = response.data;

        return generation;
    } catch (error) {
        throw error;
    }
}

export const fetchGenerationSpecies = async (species: Species[]): Promise<PokemonSpecies[]> => {
    try {
        const pokemonSpecies: PokemonSpecies[] = await Promise.all(species
            .map(element => fetchPokemonSpeciesByUrl(element.url))
        );

        return pokemonSpecies;
    } catch (error) {
        throw error;
    }
}