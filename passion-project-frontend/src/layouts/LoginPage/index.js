import React from "react"
import Login from "../../components/Login"
import {createUser, loginUser} from "../../network"
import {useHistory} from "react-router-dom"

export default function PostDetailsPage({setToken}) {
  const history = useHistory()

  const logUser = async data => {
    if (data.type === "signup" || data.type === "login") {
      var sendData
      var result = false
      console.log(sendData)
      if (data.type === "signup") {
        sendData = (({username, password}) => ({username, password}))(data)
        result = await createUser({sendData, setToken})
      } else if (data.type === "login") {
        sendData = (({username, password}) => ({username, password}))(data)
        result = await loginUser({sendData, setToken})
      }
      if(result) {
        history.push("/")
      }
    } else {
      console.log("Invalid type")
    }
  }

  return (
    <Login
      loginUser = {logUser}
    />
  )
}
