import {useHistory} from "react-router-dom"
import PageHeader from "../../components/PageHeader"

export default function HeaderNavigation({setToken, user}) {
  const history = useHistory()

  const logoutClicked = () => {
    setToken("")
  }

  return (
    <PageHeader
      user={user}
      title="Some game"
      titleClicked={() => history.push("/")}
      login={() => history.push("/login")}
      profile={() => history.push("/profile")}
      logout={logoutClicked}
    />
  )
}