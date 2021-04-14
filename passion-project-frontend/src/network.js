import axios from 'axios'

//POST /api/users
export async function createUser({sendData, setToken}) {
  try {
    const result = await axios.post(`/api/users`, {
      ...sendData
    })
    setToken(result.data.accessToken)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

//POST /api/users/login
export async function loginUser({sendData, setToken}) {
  try {
    const result = await axios.post(`/api/users/login`, {
      ...sendData
    })
    setToken(result.data.accessToken)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}