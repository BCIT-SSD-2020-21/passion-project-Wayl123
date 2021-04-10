import React from "react"
import { useHistory } from 'react-router-dom'

import Home from "../../../components/Puzzle2/Home"

export default function P1HomePage({updateLocalProgress}) {
  const history = useHistory()

  const checkUnlock = () => {
    console.log("button")
  }

  return (
    <Home 
      checkUnlock={checkUnlock}
    />
  )
}
