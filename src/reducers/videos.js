import {
  GET_VIDEOS_SYNC,
  GET_VIDEOS_ASYNC,
  GET_VIDEOS_ASYNC_FAIL,
  GET_VIDEOS_ASYNC_SUCCESS,
  SELECT_VIDEO
} from '../actions/videos';

const initialState = {
    loading: false,
    data: [],
    selectedIndex: undefined,
};

const videosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOS_SYNC:
      return Object.assign({}, state, {
        data: action.payload.data.items,
        selectedIndex: 0,
      });
    case GET_VIDEOS_ASYNC:
      return Object.assign({}, state, {
        loading: true
      });
    case GET_VIDEOS_ASYNC_FAIL:
    case GET_VIDEOS_ASYNC_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        data: action.payload,
        selectedIndex: 0,
      });
    case SELECT_VIDEO:
      return Object.assign({}, state, {
        selectedIndex: action.payload,
      });
    default:
      return state;
  }
};

export default videosReducer
