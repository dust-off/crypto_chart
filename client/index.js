import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import store from './store/store'
import Root from './components/Root.jsx';

// const store = createStore(todoApp)

import testRun from './actions/testRun'
store.dispatch(testRun('thing'))

render(
    <Root store={store} />,
    document.getElementById('app')
)


/*

import React from 'react'
import { render } from 'react-dom'
// import { BrowserRouter } from 'react-router-dom'
import App from './components/App.jsx';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

// import store from './store/store.js';
// /* START SOLUTION */
// import { Provider } from 'react-redux';

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
///Users/dustinburns/HiR/hrsf00-mini-apps-2-master 2/challenge_1/crypto_chart/client/components/App.jsx

render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));
