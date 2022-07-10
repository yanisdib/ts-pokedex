import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { PokemonSpecy } from '../interfaces/Generation';
import { Pokemon } from '../interfaces/Pokemon';
import { StoreState } from '../interfaces/StoreState';

import { fetchGenerationPokemonRequest } from '../services/redux/slices/generationPokemon';

import { useAppSelector } from './useAppSelector';


export const useGenerationPokemon = (specyList: PokemonSpecy[]): StoreState<Pokemon[]> => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGenerationPokemonRequest(specyList));
    }, [dispatch, specyList]);

    return useAppSelector(state => state.generationPokemon);
}