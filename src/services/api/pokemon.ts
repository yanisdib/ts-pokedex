import axios, { AxiosResponse } from 'axios';

import { Pokemon } from '../../interfaces/Pokemon';


const ROOT_URL = process.env.REACT_APP_API_URL;

export const fetchPokemonByName = async (
    name: string
): Promise<Pokemon> => {
    try {
        const url = `${ROOT_URL}pokemon/${name}`;
        const response: AxiosResponse<Pokemon> = await axios.get(url);

        return response.data;
    } catch (error) {
        throw error;
    }
}