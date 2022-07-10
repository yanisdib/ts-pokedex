import { ActionReducerMapBuilder, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { isFailedAction } from '../../../helpers/utils/action-handler';
import { PokemonSpecy } from '../../../interfaces/Generation';

import { Pokemon } from '../../../interfaces/Pokemon';
import { StoreState } from '../../../interfaces/StoreState';


interface GenerationPokemonState extends StoreState<Pokemon[]> { }


const initialState: GenerationPokemonState = {
    body: [],
    error: null,
    status: 'idle'
}

const reducers = {
    fetchGenerationPokemonRequest: {
        reducer: (
            state: GenerationPokemonState
        ) => ({
            ...state,
            status: 'pending'
        }),
        prepare: (
            pokemonSpecyList: PokemonSpecy[]
        ) => ({ payload: { pokemonSpecyList } })
    },
    fetchGenerationPokemonSuccess: (
        state: GenerationPokemonState,
        action: PayloadAction<Pokemon[]>
    ) => ({
        ...state,
        body: action.payload,
        status: 'resolved'
    })
};

const extraReducers = (
    builder: ActionReducerMapBuilder<GenerationPokemonState>
) => {
    builder
        .addMatcher(isFailedAction, (state, action) => ({
            ...state,
            error: action.error,
            status: 'rejected'
        }))
        .addDefaultCase((state: GenerationPokemonState) => state)
};

export const generationPokemonSlice = createSlice({
    name: 'generationPokemon',
    initialState,
    reducers,
    extraReducers
});

export const {
    fetchGenerationPokemonRequest,
    fetchGenerationPokemonSuccess
} = generationPokemonSlice.actions;


export default generationPokemonSlice.reducer;