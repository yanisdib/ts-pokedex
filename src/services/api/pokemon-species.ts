import axios, { AxiosResponse } from 'axios';

import { PokemonSpecies } from '../../interfaces/PokemonSpecies';


export const fetchPokemonSpeciesByUrl = async (url: string): Promise<PokemonSpecies> => {
    try {
        const response: AxiosResponse<PokemonSpecies> = await axios.get(url);

        return response.data;
    } catch (error) {
        throw error;
    }
}