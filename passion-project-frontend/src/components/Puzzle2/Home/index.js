import React from "react"

import styles from "../index.module.css"

export default function Home({trigger, unlockClicked}) {
  return (
    <div>
      <h1>Training site 2</h1>
      <p>Now there are site that just require you to find some things</p>
      <p>You need to find some things below to unlock the locked button</p>
      <p>Find the way to turn the light green</p>
      <span className={`${styles.transition} ${styles.dot} ${trigger[0] ? styles.unlock : styles.lock}`}></span>
      <span className={`${styles.transition} ${styles.dot} ${trigger[1] ? styles.unlock : styles.lock}`}></span>
      <span className={`${styles.transition} ${styles.dot} ${trigger[2] ? styles.unlock : styles.lock}`}></span>
      {
        trigger[0] && trigger[1] && trigger[2] ?
          <button onClick={unlockClicked}>Unlocked</button>
        :
          <button>Locked button</button>
      }
    </div>
  )
}
