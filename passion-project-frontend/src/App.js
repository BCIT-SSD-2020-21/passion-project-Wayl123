import React, {useState, useEffect} from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import jwtDecode from "jwt-decode"
import useLocalStorage from "react-use-localstorage"

import {getProgress, updateProgress} from "./network"

import HeaderNavigation from "./layouts/HeaderNavigation"
import LoginPage from "./layouts/LoginPage"
import WelcomePage from "./layouts/WelcomePage"
import EndPage from "./layouts/EndPage"
import P1HomePage from "./layouts/Puzzle1/HomePage"
import P2HomePage from "./layouts/Puzzle2/HomePage"

function App() {
  const [token, setToken] = useLocalStorage("token")
  const [user, setUser] = useState()
  const [progress, setProgress] = useState([])

  const numOfLevel = 2

  useEffect(() => {
    const tokenUser = token ? jwtDecode(token) : null
    setUser(tokenUser)
    console.log(tokenUser)
  }, [token])

  useEffect(() => {
    setDefaultProgress()
  }, [])

  useEffect(async() => {
    if(user && token) {
      const userProgress = await setDefaultUserProgress()
      if(userProgress) {
        setProgress(userProgress)
      }
    }
  }, [user && token])

  const setDefaultProgress = () => {
    let newProgress = []
    for(var i=progress.length; i<numOfLevel; i++) {
      newProgress.push(false)
    }
    setProgress(newProgress)
  }

  const setDefaultUserProgress = async() => {
    const result = await getProgress({user})
    return(result)
  }

  const updateLocalProgress = (data) => {
    let newProgress = progress
    newProgress.splice(data.level-1, 1, true)
    setProgress([...newProgress])
    updateProgress({newProgress, user})
    console.log(newProgress)
  }

  return (
    <Router>
      <HeaderNavigation setToken={setToken} user={user} />
      <Switch>
        <Route path="/login">
          <LoginPage setToken={setToken} />
        </Route>
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
