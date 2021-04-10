import React from "react"

import styles from "../index.module.css"

export default function Home({checkUnlock}) {
  return (
    <div>
      <h1>Training site 2</h1>
      <p>Now there are site that just require you to find some things</p>
      <p>You need to find some things below to unlock the locked button</p>
      <p>Find the way to turn the light green</p>
      <span className={`${styles.dot} ${styles.lock}`}></span>
      <span className={`${styles.dot} ${styles.lock}`}></span>
      <span className={`${styles.dot} ${styles.lock}`}></span>
      <button onClick={checkUnlock}>Locked button</button>
    </div>
  )
}
