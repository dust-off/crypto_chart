import { combineReducers } from 'redux';
import testReducer from './testReducer.js';
import setGraphDataReducer from './graphDataReducers.js';
// import videoList from './videoList.js';

var rootReducer = combineReducers({
    testReducer,
    setGraphDataReducer,
});

export default rootReducer;
