import {SEARCH, SELECT_VIDEO} from './actions';

const initialState = {
  videos: [],
  selectedIndex: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return Object.assign({}, state, {
        videos: action.payload.data.items,
        selectedIndex: 0
      });
    case SELECT_VIDEO:
      return Object.assign({}, state, {
        selectedIndex: action.payload
      });
    default: 
      return state;
  }
}

export default reducer
