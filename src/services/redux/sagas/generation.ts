import { call, put, takeLeading } from '@redux-saga/core/effects';

import { Generation } from '../../../interfaces/Generation';
import { fetchGeneration } from '../../api/generation';
import { fetchGenerationRequest, fetchGenerationSuccess } from '../slices/generation';


export function* fetchGenerationSaga() {
    try {
        const generationList: Generation[] = yield call(fetchGeneration);
        yield put(fetchGenerationSuccess(generationList));
    } catch {
        const error: Error = new Error('Something went wrong.');
        yield put({ type: 'generation/fetchGenerationFailure', error });
    }
}

export function* generationSaga() {
    yield takeLeading(fetchGenerationRequest, fetchGenerationSaga);
}