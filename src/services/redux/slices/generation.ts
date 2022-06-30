import { ActionReducerMapBuilder, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { isFailedAction } from '../../../helpers/action-handler';

import { Generation } from '../../../interfaces/Generation';
import { StoreState } from '../../../interfaces/StoreState';


interface GenerationState extends StoreState<Generation[]> { }


const initialState: GenerationState = {
    body: [],
    error: null,
    status: 'idle'
}

const reducers = {
    fetchGenerationRequest: (state: GenerationState) => ({
        ...state,
        status: 'pending'
    }),
    fetchGenerationSuccess: (
        state: GenerationState,
        action: PayloadAction<Generation[]>
    ) => ({
        ...state,
        body: action.payload,
        status: 'resolved'
    })
};

const extraReducers = (
    builder: ActionReducerMapBuilder<GenerationState>
) => {
    builder
        .addMatcher(isFailedAction, (state, action) => ({
            ...state,
            error: action.error,
            status: 'rejected'
        }))
        .addDefaultCase((state: GenerationState) => state)
};

export const generationSlice = createSlice({
    name: 'generation',
    initialState,
    reducers,
    extraReducers
});

export const {
    fetchGenerationRequest,
    fetchGenerationSuccess
} = generationSlice.actions;


export default generationSlice.reducer;