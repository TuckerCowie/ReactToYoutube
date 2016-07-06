import SearchYoutube from '../lib/youtube.js';
const API_KEY = 'AIzaSyCUx2lYJCpDU63ODdW5Q2U9_vGs1BJUbsg';

export const GET_VIDEOS_SYNC = 'GET_VIDEOS_SYNC';
export const GET_VIDEOS_ASYNC = 'GET_VIDEOS_ASYNC';
export const GET_VIDEOS_ASYNC_FAIL = 'GET_VIDEOS_ASYNC_FAIL';
export const GET_VIDEOS_ASYNC_SUCCESS = 'GET_VIDEOS_ASYNC_SUCCESS';
export const SELECT_VIDEO = 'SELECT_VIDEO';

export const searchVideos = (q) => ({
  type: GET_VIDEOS_SYNC,
  payload: SearchYoutube({key: API_KEY, q}),
  meta: {
    searchTerm: q
  },
});

export const searchVideosAsync = (q) => ({
  type: GET_VIDEOS_ASYNC,
  payload: q,
});

export const selectVideo = (id) => ({
  type: SELECT_VIDEO,
  payload: id,
});
