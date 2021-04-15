import React from "react"

import styles from "./index.module.css"

export default function Profile({user, progress}) {
  return (
    <div>
      <h1>Profile</h1>
      <h3>User: {user.username}</h3>
      <h3>Level progress:</h3>
      {progress.map((status, index) => {
        return <p><span className={`${styles.dot} ${status ? styles.finish : styles.notFinish}`}></span>Level{index+1}</p>
      })}
    </div>
  )
}