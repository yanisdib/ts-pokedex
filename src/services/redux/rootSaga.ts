import { all, fork } from 'redux-saga/effects';

import { generationSaga } from './sagas/generation';


export default function* rootSaga() {
    yield all([
        fork(generationSaga)
    ]);
}