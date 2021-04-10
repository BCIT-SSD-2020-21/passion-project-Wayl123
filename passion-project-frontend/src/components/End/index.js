import React from "react"

export default function Welcome({returnClicked}) {
  return (
    <div>
      <h1>Congratulation, you have reach the end</h1>
      <p>Hello, this is the end of the puzzle game for now</p>
      <p>There may be more puzzle in the future but I am not sure</p>
      <p>Although I initally wanted to write some kind of story through the puzzle but I can't think of a coherent plot</p>
      <p>I may try to string up the puzzle together later on</p>
      <p>Press the button to return to the title page</p>
      <button onClick={returnClicked}>Return</button>
    </div>
  )
}