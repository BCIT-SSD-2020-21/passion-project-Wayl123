import React from "react"
import { useHistory } from 'react-router-dom'

import Welcome from "../../components/Welcome"

export default function WelcomePage() {
  const history = useHistory()

  const startClicked = () => {
    history.push(`/puzzle1`)
  }

  return (
    <Welcome 
      startClicked={startClicked}
    />
  )
}
