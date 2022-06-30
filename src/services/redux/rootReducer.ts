import { combineReducers } from '@reduxjs/toolkit';

import generationReducer from './slices/generation';


const rootReducer = combineReducers({
    generation: generationReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;