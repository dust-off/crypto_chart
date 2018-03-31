import Redux from 'redux';

var testReducer = (state = [], action) => {
    switch (action.type) {
        case 'RUN_TEST':
            console.log('testing')
            return action.test;
        default:
            return state;
    }
};

export default testReducer;
