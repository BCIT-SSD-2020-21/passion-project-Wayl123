import React, {useState} from "react"
import { useHistory } from 'react-router-dom'

import Home from "../../../components/Puzzle2/Home"
import DayNight from "../../../components/Puzzle2/DayNight"

export default function P1HomePage({updateLocalProgress}) {
  const [trigger, setTrigger] = useState([false, false, false])
  const history = useHistory()

  const checkUnlock = () => {
    console.log(trigger)
  }

  const triggerClicked = (data) => {
    let newTrigger = trigger
    newTrigger.splice(data.num-1, 1, true)
    setTrigger([...newTrigger])
    console.log(newTrigger)
  }

  return (
    <div>
      <Home 
        trigger={trigger}
        checkUnlock={checkUnlock}
      />
      <DayNight 
        triggerClicked={triggerClicked}
      />
    </div>
  )
}
