import React from "react"

import styles from "./index.module.css"

export default function PageHeader({user, title, titleClicked, profile, login, logout}) {
  return(
    <div className={styles.appbar}>
      <button className={styles.textButton} onClick={titleClicked}><h2>{title}</h2></button>
      {
        !user ?
          <button className={styles.textButton} onClick={login}>
            Login
          </button>
        :
          <span className={styles.rightContainer}>
            <button className={styles.textButton} onClick={profile}>
              Profile
            </button>
            <button className={styles.textButton} onClick={logout}>
              Logout
            </button>
          </span>
      }
    </div>
  )
}