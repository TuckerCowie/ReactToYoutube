import { createStore, applyMiddleware, compose } from 'redux';
import ReduxPromise from 'redux-promise';

import reducer from './reducer';

export default function configureStore(initialState) {

  const finalCreateStore = compose(
    applyMiddleware(ReduxPromise),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const store = finalCreateStore(reducer, initialState);

  return store;
}
