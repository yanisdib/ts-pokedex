import createSagaMiddleware, { SagaMiddleware } from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';


const sagaMiddleware: SagaMiddleware<{}> = createSagaMiddleware();
const reducer = rootReducer;
const store = configureStore({ reducer, middleware: [sagaMiddleware] });

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;