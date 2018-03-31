import { combineReducers } from 'redux';
import testReducer from './testReducer.js';
// import videoList from './videoList.js';

var rootReducer = combineReducers({
    testReducer,
    // videoList
});

export default rootReducer;
