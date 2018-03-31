import React from 'react';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';

import runTest from '../actions/testRun.js'

runTest('thing')

const App = () => (
    <div>
        <Header />
        <Main />
        <Footer />
    </div>
)

export default App
