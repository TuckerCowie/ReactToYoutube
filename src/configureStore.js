import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';
import createSagaMiddleware from 'redux-saga'

import sagas from './sagas'
import reducers from './reducers';

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducers, initialState, compose(
            applyMiddleware(ReduxPromise, sagaMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : (f) => f
        )
    );
    sagaMiddleware.run(sagas)
    return store;
}