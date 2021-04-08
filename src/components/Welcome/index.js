import React from "react"

export default function Welcome({startClicked}) {
  return (
    <div>
      <h1>Welcome to the puzzle game</h1>
      <p>This is a puzzle game where you solve a mystery on a seemly normal webpage</p>
      <p>Press the button to starts</p>
      <button onClick={startClicked}>Start</button>
    </div>
  )
}