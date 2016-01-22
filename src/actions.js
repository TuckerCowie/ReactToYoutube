import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyCUx2lYJCpDU63ODdW5Q2U9_vGs1BJUbsg';

export const SEARCH = 'SEARCH';
export const SELECT_VIDEO = 'SELECT_VIDEO';

export const searchVideos = (term) => {
  return {
    type: SEARCH,
    payload: YTSearch({key: API_KEY, term: term}),
    meta: {
      searchedFor: term
    }
  };
};

export const selectVideo = (id) => {
  return {
    type: SELECT_VIDEO,
    payload: id
  };
};
