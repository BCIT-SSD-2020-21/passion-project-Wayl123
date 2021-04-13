import React from "react"

export default function Welcome({returnClicked}) {
  return (
    <div>
      <h1>Congratulation, you have reach the end</h1>
      <p>Hello, this is the end of the puzzle game for now</p>
      <p>There may be more puzzle in the future but I am not sure</p>
      <p>Although I initally wanted to write some kind of story through the puzzle but I can't think of a coherent plot</p>
      <p>I base the old chat board on like the general plot of the game "the beginner's guide"</p>
      <p>Thought I can start off a story from there</p>
      <p>Press the button to return to the title page</p>
      <button onClick={returnClicked}>Return</button>
    </div>
  )
}