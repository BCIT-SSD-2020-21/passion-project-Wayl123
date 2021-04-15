import React from "react"
import { useHistory } from 'react-router-dom'

import Profile from "../../components/Profile"

export default function ProfilePage({user, progress}) {
  const history = useHistory()

  const navigateToLevel = (data) => {
    history.push(`/puzzle${data}`)
  }

  return (
    <div>
      {
        user ?
          <Profile
            user={user}
            progress={progress}
            navigateToLevel={navigateToLevel}
          />
        :
          <p>Loading...</p>
      }
    </div>
  )
}
