import { combineReducers } from 'redux';
import test from './testReducer.js';
import graph from './graphDataReducers.js';

// var rootReducer = combineReducers({
//     test,
//     graph,
// });

export default combineReducers({
    test,
    graph,
});
