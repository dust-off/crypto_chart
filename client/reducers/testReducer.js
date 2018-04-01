import Redux from 'redux';

var testReducer = (state = [], action) => {
    switch (action.type) {
        case 'RUN_TEST':
            console.log('RUN_TEST')
            return action.test;
        default:
            return state;
    }
};

export default testReducer;
