import { all, fork } from 'redux-saga/effects';

import { generationSaga } from './sagas/generation';
import { generationPokemonSaga } from './sagas/generationPokemon';


export default function* rootSaga() {
    yield all([
        fork(generationSaga),
        fork(generationPokemonSaga)
    ]);
}