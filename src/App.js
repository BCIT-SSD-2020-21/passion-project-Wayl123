import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import WelcomePage from "./layouts/WelcomePage"
import P1HomePage from "./layouts/Puzzle1/HomePage"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/puzzle1">
          <P1HomePage />
        </Route>
        <Route path="/">
          <WelcomePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
