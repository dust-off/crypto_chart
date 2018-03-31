import { connect } from 'react-redux';
import Graph from './../components/Graph.jsx';
import triggerTest from './../actions/testRun.js';

var mapStateToProps = (state) => ({
    test: state.testReducer
});

var mapDispatchToProps = (dispatch) => ({
    handleGraphEntryTitleClick: (text) => {
        dispatch(triggerTest(text));
    }
});

var GraphContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Graph);

export default GraphContainer;
