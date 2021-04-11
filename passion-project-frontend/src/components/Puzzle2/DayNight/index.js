import React, {useState} from "react"

import styles from "../index.module.css"
import Chat1 from "./chat1"

export default function DayNight({triggerClicked}) {
  const [time, setTime] = useState(true)
  const styleBg = `${styles.transition} ${time ? styles.dayBg : styles.nightBg}`
  const styleText = `${styles.transition} ${time ? styles.dayText : styles.nightText}`

  const handleClick = () => {
    setTime(!time)
  }

  return (
    <div>
      <button onClick={handleClick}>Change time</button>
      <div className={styleBg}>
        <h3 className={styleText}>Old chat board</h3>
        <Chat1 
          time={time} 
          triggerClicked={triggerClicked}
        />
      </div>
    </div>
  )
}
