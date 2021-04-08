import React, {useState, useEffect} from "react"

import Home from "../../../components/Puzzle1/Home"

export default function P1HomePage({updateLocalProgress}) {
  const [code, setCode] = useState("")

  useEffect(() => {
    generateRandCode()
  }, [])

  const generateRandCode = () => {
    setCode(Math.random().toString(36).substr(2, 5))
  }

  const checkAnswer = (data) => {
    console.log(data.guess)
    console.log(code)
    if (data.guess === code) {
      alert("Correct")
      updateLocalProgress({level: 1})
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
