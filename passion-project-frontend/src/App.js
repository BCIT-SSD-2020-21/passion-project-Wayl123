import React, {useState, useEffect} from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import WelcomePage from "./layouts/WelcomePage"
import EndPage from "./layouts/EndPage"
import P1HomePage from "./layouts/Puzzle1/HomePage"
import P2HomePage from "./layouts/Puzzle2/HomePage"

function App() {
  const [progress, setProgress] = useState([])

  const numOfLevel = 1

  useEffect(() => {
    setDefaultProgress()
  }, [])

  const setDefaultProgress = () => {
    let newProgress = []
    for(var i=progress.length; i<numOfLevel; i++) {
      newProgress.push(false)
    }
    setProgress(newProgress)
    console.log(newProgress)
  }

  const updateLocalProgress = (data) => {
    let newProgress = progress
    newProgress.splice(data.level-1, 1, true)
    setProgress([...newProgress])
    console.log(newProgress)
  }

  return (
    <Router>
      <Switch>
        <Route path="/puzzle1">
          <P1HomePage updateLocalProgress={updateLocalProgress} />
        </Route>
        <Route path="/puzzle2">
          <P2HomePage updateLocalProgress={updateLocalProgress} />
        </Route>
        <Route path="/end">
          <EndPage />
        </Route>
        <Route path="/">
          <WelcomePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
