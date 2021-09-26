import React, { useState, useEffect } from 'react'
import { Parallax } from 'react-scroll-parallax'
import Home from './Home'
import Watch from './Watch'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const App = () => {
  return (
    <div>
      hi this is a test 2
      <Router>
        <Switch>
          <Route exact path={ process.env.PUBLIC_URL + '/watch' }>
            <Watch />
          </Route>
          <Route exact path={ process.env.PUBLIC_URL + '/' }>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}


export default App