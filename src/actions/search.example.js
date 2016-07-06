export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';

export const updateSearchTerm = (value) => ({
  type: UPDATE_SEARCH_TERM,
  payload: value,
});
