import React, {useState} from "react"

import styles from "../index.module.css"

export default function DayNight() {
  const [time, setTime] = useState(true)

  const handleClick = () => {
    setTime(!time)
  }

  return (
    <div>
      <button onClick={handleClick}>Change time</button>
      {
        time ?
          <p>Day</p>
        :
          <p>Night</p>
      }
    </div>
  )
}
