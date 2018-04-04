import React from 'react'
import { render } from 'react-dom'
import store from './store/store'
import Root from './components/Root.jsx';

import graphTrigger from './actions/graphData'
// import timeData from '../data/timeData'

import testRun from './actions/testRun'
store.dispatch(testRun('thing'))

// store.dispatch(graphTrigger.setGraphData(timeData))

render(
    <Root store={store} />,
    document.getElementById('app')
)
