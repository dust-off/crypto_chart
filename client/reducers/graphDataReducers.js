import Redux from 'redux';

var graphReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_GRAPH_DATA':
            console.log('SET_GRAPH_DATA')
            state = Object.assign({}, state, {
                data: action.payload
            })
            // state = { ...state, data: action.payload };
            break;
        case 'SET_GRAPH_DATES':
            console.log('SET_GRAPH_DATES')
            state = Object.assign({}, state, {
                date: action.payload
            })
            // state = { ...state, date: action.payload };
            break;
        case 'FETCH_GRAPH_DATA':
            console.log('FETCH_GRAPH_DATA')
            state = Object.assign({}, state, {
                fetching: true,
                data: action.payload
            })
            // state = { ...state, fetching: true, data: action.payload}
            break;
        case 'FETCH_GRAPH_FULFILLED':
            console.log('FETCH_GRAPH_FULFILLED')
            state = Object.assign({}, state, {
                fetching: false,
                data: action.payload
            })
            // state = { ...state, fetching: false, data: action.payload }
            break;
        case 'FETCH_GRAPH_ERR':
            console.log('FETCH_GRAPH_ERR')
            state = Object.assign({}, state, {
                fetching: false,
                data: action.payload
            })
            // state = { ...state, fetching: false, data: action.payload }
            break;
        default:
            break;
    }
    return state;
};

export default graphReducer;

