import React from "react"

import styles from "./index.module.css"

export default function Profile({user, progress, navigateToLevel}) {
  return (
    <div>
      <h1>Profile</h1>
      <h3>User: {user.username}</h3>
      <h3>Level progress:</h3>
      {progress.map((status, index) => {
        return <button className={styles.textButton} onClick={() => navigateToLevel(index+1)}><span className={`${styles.dot} ${status ? styles.finish : styles.notFinish}`}></span>Level{index+1}</button>
      })}
    </div>
  )
}