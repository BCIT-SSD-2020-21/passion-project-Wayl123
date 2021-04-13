import React, {useState} from "react"

import styles from "../index.module.css"
import Chat1 from "./chat1"
import Chat2 from "./chat2"

export default function DayNight({triggerClicked, trigger}) {
  const [time, setTime] = useState(true)
  const [switchCount, setSwitchCount] = useState(0)
  const styleBg = `${styles.transition} ${time ? styles.dayBg : styles.nightBg}`
  const styleText = `${styles.transition} ${time ? styles.dayText : styles.nightText}`

  const handleClick = () => {
    if(trigger[1] && time) {
      if(switchCount+1 >= 5) {
        triggerClicked({num: 3})
      }
      setSwitchCount(switchCount+1)
    }
    setTime(!time)
  }

  return (
    <div className={styles.chatContainer}>
      <button onClick={handleClick}>Change time</button>
      <div className={styleBg}>
        <h3 className={styleText}>Old chat board</h3>
        <Chat1 
          time={time} 
          triggerClicked={triggerClicked}
        />
        {
          trigger[0] ?
            <Chat2
              time={time}
              switchCount={switchCount}
              triggerClicked={triggerClicked}
            />
          :
            <span />
        }
      </div>
    </div>
  )
}
