// export default {
//     setGraphData: (payload) => ({
//         type: 'SET_GRAPH_DATA',
//         payload,
//     }),
//     setGraphDates: (payload) => ({
//         type: 'SET_GRAPH_DATES',
//         payload,
//     }),
//     fetchGraphData: (payload) => {
        
//     }
// };

import axios from 'axios'

export function setGraphData(payload) {
    return {
        type: 'SET_GRAPH_DATA',
        payload,
    }
}

export function setGraphDates(payload) {
    return {
        type: 'SET_GRAPH_DATES',
        payload,
    }
}

export function fetchGraphData(payload) {
    return (dispatch) => {
        axios.get('http://rest.learncode.academy/api/test123/tweets')
            .then((res) => {
                dispatch({type: 'FETCH_GRAPH_FULFILLED', payload: res})
            })
            .catch((err) => {
                dispatch({ type: 'FETCH_GRAPH_ERR', payload: err })
            })
    }
}