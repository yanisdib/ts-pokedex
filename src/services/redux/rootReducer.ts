import { combineReducers } from '@reduxjs/toolkit';

import generationReducer from './slices/generation';
import generationPokemonReducer from './slices/generationPokemon';


const rootReducer = combineReducers({
    generation: generationReducer,
    generationPokemon: generationPokemonReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;