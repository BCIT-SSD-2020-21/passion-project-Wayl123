import React from "react"
import { useHistory } from 'react-router-dom'

import Home from "../../../components/Puzzle2/Home"
import DayNight from "../../../components/Puzzle2/DayNight"

export default function P1HomePage({updateLocalProgress}) {
  const history = useHistory()

  const checkUnlock = () => {
    console.log("button")
  }

  return (
    <div>
      <Home 
        checkUnlock={checkUnlock}
      />
      <DayNight />
    </div>
  )
}
