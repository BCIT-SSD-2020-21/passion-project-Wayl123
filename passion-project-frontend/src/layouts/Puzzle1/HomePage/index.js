import React, {useState, useEffect} from "react"
import { useHistory } from 'react-router-dom'

import Home from "../../../components/Puzzle1/Home"

export default function P1HomePage({updateLocalProgress}) {
  const [code, setCode] = useState("")
  const history = useHistory()

  useEffect(() => {
    generateRandCode()
  }, [])

  const generateRandCode = () => {
    setCode(Math.random().toString(36).substr(2, 5))
  }

  const checkAnswer = (data) => {
    if (data.guess === code) {
      alert("Correct")
      updateLocalProgress({level: 1})
      history.push(`/puzzle2`)
    } else {
      alert("Incorrect code")
    }
  }

  return (
    <Home 
      checkAnswer={checkAnswer}
      code={code}
    />
  )
}
