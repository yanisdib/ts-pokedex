import axios, { AxiosResponse } from 'axios';

import { fetchPokemonByName } from './pokemon';
import { fetchPokemonSpeciesByUrl } from './pokemon-species';

import { Generation, PokemonSpecy } from '../../interfaces/Generation';
import { PokemonSpecies } from '../../interfaces/PokemonSpecies';
import { Pokemon } from '../../interfaces/Pokemon';
import { PokeApiResponse } from '../../interfaces/PokeApiResponse';


const ROOT_URL = process.env.REACT_APP_API_URL;

export const fetchGeneration = async (): Promise<Generation[]> => {
    try {
        const url = `${ROOT_URL}generation`;
        const response: AxiosResponse<PokeApiResponse> = await axios.get(url);
        const generationList: Generation[] = await Promise.all(
            response.data?.results
                .map(generation => fetchGenerationByName(generation.name))
        );

        return generationList;
    } catch (error) {
        throw error;
    }
}

export const fetchGenerationById = async (
    id: number
): Promise<Generation> => {
    try {
        const response: AxiosResponse<Generation> = await axios.get(`${ROOT_URL}generation/${id}`);

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const fetchGenerationByName = async (
    name: string
): Promise<Generation> => {
    try {
        const response: AxiosResponse<Generation> = await axios.get(`${ROOT_URL}generation/${name}`);

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const fetchGenerationPokemon = async (
    pokemon: PokemonSpecy[]
): Promise<Pokemon[]> => {
    try {
        const pokemonList: Pokemon[] = await Promise.all(pokemon
            .map(element => fetchPokemonByName(element.name))
        );

        return pokemonList;
    } catch (error) {
        throw error;
    }
}

export const fetchGenerationSpecies = async (
    species: PokemonSpecy[]
): Promise<PokemonSpecies[]> => {
    try {
        const pokemonSpeciesList: PokemonSpecies[] = await Promise.all(species
            .map(element => fetchPokemonSpeciesByUrl(element.url))
        );

        return pokemonSpeciesList;
    } catch (error) {
        throw error;
    }
}