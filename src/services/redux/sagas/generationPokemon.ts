import { call, put, takeLatest } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { PokemonSpecy } from '../../../interfaces/Generation';

import { Pokemon } from '../../../interfaces/Pokemon';

import { fetchGenerationPokemon } from '../../api/generation';

import { fetchGenerationPokemonRequest, fetchGenerationPokemonSuccess } from '../slices/generationPokemon';


interface FetchGenerationPokemonPayload {
    pokemonSpecyList: PokemonSpecy[];
}


export function* fetchGenerationPokemonSaga({
    payload
}: PayloadAction<FetchGenerationPokemonPayload>) {
    try {
        const pokemonList: Pokemon[] = yield call(fetchGenerationPokemon, payload.pokemonSpecyList);
        yield put(fetchGenerationPokemonSuccess(pokemonList));
    } catch {
        const error: Error = new Error('Something went wrong.');
        yield put({ type: 'generationPokemon/fetchGenerationPokemonFailure', error });
    }
}

export function* generationPokemonSaga() {
    yield takeLatest(fetchGenerationPokemonRequest, fetchGenerationPokemonSaga);
}