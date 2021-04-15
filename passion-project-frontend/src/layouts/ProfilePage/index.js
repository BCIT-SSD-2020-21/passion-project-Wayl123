import React from "react"

import Profile from "../../components/Profile"

export default function ProfilePage({user, progress}) {
  return (
    <div>
      {
        user ?
          <Profile
            user={user}
            progress={progress}
          />
        :
          <p>Loading...</p>
      }
    </div>
  )
}
