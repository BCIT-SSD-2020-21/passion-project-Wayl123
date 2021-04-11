import React from "react"

import styles from "../index.module.css"

export default function Chat1({time, triggerClicked}) {
  const styleText = `${styles.transition} ${time ? styles.dayText : styles.nightText}`

  const handleClick = (e) => {
    triggerClicked({num: 1})
  }

  return (
    <div>
      {
        time ? 
          <span>
            <p className={styleText}>personB: Well this is quite cool I suppose.</p>
            <p className={styleText}>personA: I work quite hard at it.</p>
            <p className={styleText}>personB: What you going to do with it?</p>
            <p className={styleText}>personA: Not sure, I don't think I will do much with it.</p>
            <p className={styleText}>personC: Are you sure, I think it is pretty fun.</p>
            <p className={styleText}>personA: Yeah, I just made it for fun after all.</p>
            {/* Used so that css can transition these text as well */}
            <p /><p /><button className={styles.textButton} /><p /><p />
          </span>
        :
          <span>
            <p className={styleText}>personC: Hey.</p>
            <p className={styleText}>personB: ?</p>
            <p className={styleText}>personC: I think we should publish it.</p>
            <p className={styleText}>personB: You mean that?</p>
            <p className={styleText}>personC: Yeah it is a lost opportunity if we left it as it is</p>
            <p className={styleText}>personB: Does he know?</p>
            <p className={styleText}>personC: No, knowing him he would not approve of this.</p>
            <p className={`${styleText} ${styles.inlineText}`}>personC: Well we can send it</p>
            <button className={`${styleText} ${styles.textButton}`} onClick={handleClick}>here.</button>
            <p className={styleText}>PersonB: I don't know... Are you sure this is fine?</p>
            <p className={styleText}>PersonC: Yeah it is fine.</p>
          </span>
      }
    </div>
  )
}
