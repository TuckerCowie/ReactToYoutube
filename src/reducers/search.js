import {UPDATE_SEARCH_TERM} from '../actions/search';

const initialState = 'React Js';

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_TERM:
      return action.payload;
    default: 
      return state;
  }
}

export default searchReducer
