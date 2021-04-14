import React from "react"
import { useHistory } from 'react-router-dom'

import End from "../../components/End"

export default function WelcomePage() {
  const history = useHistory()

  const returnClicked = () => {
    history.push(`/`)
  }

  return (
    <End
      returnClicked={returnClicked}
    />
  )
}
