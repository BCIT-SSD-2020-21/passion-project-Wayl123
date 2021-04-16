import React from "react"

import styles from "./index.module.css"

export default function Home({checkAnswer, code}) {
  const handleSubmit = (e) => {
    e.preventDefault()
    checkAnswer({guess: e.target.guess.value})
  }

  return (
    <div>
      <h1>Training site</h1>
      <p>This site is used to prepare you regarding what is ahead</p>
      <p>As you solve more cases you get access to more advance cases</p>
      <p>Your first task is to find the combination that is hidden in this page and enter it into the text box</p>
      <form onSubmit={handleSubmit}>
        <input name="guess" type="text" placeholder="Enter Code" />
      </form>
      <p className={styles.code}>{code}</p>
    </div>
  )
}
