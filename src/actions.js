import SearchYoutube from './lib/youtube.js';
const API_KEY = 'AIzaSyCUx2lYJCpDU63ODdW5Q2U9_vGs1BJUbsg';

export const SEARCH = 'SEARCH';
export const SELECT_VIDEO = 'SELECT_VIDEO';

export const searchVideos = (q) => {
  return {
    type: SEARCH,
    payload: SearchYoutube({key: API_KEY, q}),
    meta: {
      searchedFor: q
    }
  };
};

export const selectVideo = (id) => {
  return {
    type: SELECT_VIDEO,
    payload: id
  };
};
