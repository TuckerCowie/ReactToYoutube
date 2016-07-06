import { fork } from 'redux-saga/effects';

import {
    watchSearch,
} from './search';

/**
 * This is the root saga that forks off and accumulates other sagas, without blocking when aggregated generators run.
 * @see http://yelouafi.github.io/redux-saga/docs/api/index.html#forkfn-args
 */
export default function* sagas() {
    yield [
        fork(watchSearch),
    ];
};