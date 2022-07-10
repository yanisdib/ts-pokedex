import { call, put, takeLatest } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';

import { Generation } from '../../../interfaces/Generation';

import { fetchGenerationById } from '../../api/generation';

import { fetchGenerationRequest, fetchGenerationSuccess } from '../slices/generation';


interface FetchGenerationPayload {
    id: number;
}

export function* fetchGenerationSaga({ payload }: PayloadAction<FetchGenerationPayload>) {
    try {
        const generation: Generation = yield call(fetchGenerationById, payload.id);
        yield put(fetchGenerationSuccess(generation));
    } catch {
        const error: Error = new Error('Something went wrong.');
        yield put({ type: 'generation/fetchGenerationFailure', error });
    }
}

export function* generationSaga() {
    yield takeLatest(fetchGenerationRequest, fetchGenerationSaga);
}