import { connect } from 'react-redux';
import Graph from './../components/Graph.jsx';
import { setGraphData } from './../actions/graphData';
// import raw from '../../data/timeData'

var mapStateToProps = (state) => ({
    test: state.testReducer,
    graph: state.graph,
});

var mapDispatchToProps = (dispatch) => ({
    handleGraphDateChange: (date) => {
        dispatch(setGraphData(date));
    }
});

var GraphContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Graph);

export default GraphContainer;
