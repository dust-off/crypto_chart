import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Graph from '../containers/GraphContainer.js'
import User from './User.jsx'
// import Schedule from './Schedule'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
    <main>
    hello from main.jsx
        <Switch>
            <Route exact path='/graph' component={Graph} />
            <Route path='/user' component={User} />
            {/* <Route path='/schedule' component={Schedule} /> */}
        </Switch>
    </main>
)

export default Main
