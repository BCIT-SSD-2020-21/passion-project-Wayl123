import React, {useState} from "react"

import styles from "../index.module.css"

export default function Chat1({time, switchCount, triggerClicked}) {
  const [buttonState, setButtonState] = useState(0)
  const buttonPosition = [styles.rightSide, styles.topCenter, styles.leftSide, styles.disappear]
  const styleText = `${styles.transition} ${time ? styles.dayText : styles.nightText}`
  const dayText = `${time ? styles.animationFadeDay : ''} ${styles.dayText}`
  const nightText = `${time ? '' : styles.animationFadeNight} ${styles.nightText}`

  const xButtonClicked = () => {
    if(buttonState+1 >= 3) {
      triggerClicked({num: 2})
    }
    setButtonState(buttonState+1)
  }

  return (
    <div className={styles.animationFadeIn}>
      {
        time ? 
          <span>
            <span className={buttonPosition[buttonState]}><button className={styles.textButton} onClick={xButtonClicked}>x</button></span>
            <p className={styleText}>personA: ...What is this?</p>
            <p className={dayText}>personC: What, it does well.</p>
            <p className={dayText}>personA: Why you didn't tell me about it.</p>
            <p className={dayText}>personC: Just thought it is a shame if you keep it to yourself.</p>
            <p className={dayText}>personC: See how well it is doing.</p>
            <p className={dayText}>personA: ...</p>
            {buttonState >= 1 ? <p className={dayText}>personA: ...</p> : <span />}
            {buttonState >= 2 ? <p className={dayText}>personA: ...</p> : <span />}
            {
              buttonState >= 3 ? 
                <span>
                  <p className={dayText}>personA has left</p>
                  <p className={dayText}>personC: ???</p>
                </span>
              : 
                <span />
            }
          </span>
        :
          <span>
            <p className={nightText}>personB: Well it is done.</p>
            <p className={styleText}>personC: Good, let's see how it goes.</p>
            {
              switchCount >= 1 ? 
                <span>
                  <p className={nightText}>personB: What happened?</p>
                  <p className={nightText}>personC: Erm... not sure, he just suddenly left.</p>
                  <p className={nightText}>personB: Could it be that he is unhappy that we release it without him knowing?</p>
                  <p className={nightText}>personC: ...Well let's just first try to contact him.</p>
                </span>
              : 
                <span />
            }
            {
              switchCount >= 2 ? 
                <span>
                  <p className={nightText}>personC: Heard anything from him?</p>
                  <p className={nightText}>personB: ...No, have you?</p>
                  <p className={nightText}>personC: I haven't either. He is not picking up his phone either.</p>
                  <p className={nightText}>personC: I will try to visit his house tomorrow.</p>
                </span>
              : 
                <span />
            }
            {
              switchCount >= 3 ? 
                <span>
                  <p className={nightText}>personB: How did it go?</p>
                  <p className={nightText}>personB: ?</p>
                </span>
              : 
                <span />
            }
            {switchCount >= 4 ? <p className={nightText}>personB: ...You there?</p> : <span />}
            {switchCount >= 5 ? <p className={nightText}>personB: ...</p> : <span />}
          </span>
      }
    </div>
  )
}
