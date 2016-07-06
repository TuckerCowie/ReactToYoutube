import {combineReducers} from 'redux';
import search from './search';
import videos from './videos';

const rootReducer = combineReducers({
    search,
    videos,
});

export default rootReducer;