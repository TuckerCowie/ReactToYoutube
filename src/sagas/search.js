import {takeEvery} from 'redux-saga';
import {call, put, select} from 'redux-saga/effects';

import SearchYoutube from '../lib/youtube.js';

const API_KEY = 'AIzaSyCUx2lYJCpDU63ODdW5Q2U9_vGs1BJUbsg';

import {
    GET_VIDEOS_ASYNC,
    GET_VIDEOS_ASYNC_SUCCESS,
    GET_VIDEOS_ASYNC_FAIL,
} from '../actions/videos';

import {getSearchTerm} from '../selectors/search';
import {getVideos} from '../selectors/video';

function* searchYoutube(action) {
    try {
        const videos = (yield call(SearchYoutube, {key: API_KEY, q: action.payload})).data.items;
        yield call((ms) => new Promise(resolve => setTimeout(resolve, ms)), 300);
        return yield put({type: GET_VIDEOS_ASYNC_SUCCESS, payload: videos});
    } catch (error) {
        return yield put({type: GET_VIDEOS_ASYNC_FAIL, payload: error});
    }
}

export function* watchSearch() {
    yield takeEvery([GET_VIDEOS_ASYNC], searchYoutube);
}