import axios from 'axios'

const token = localStorage.getItem('token')
const authHeader = {Authorization: `Bearer ${token}`}

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

export async function getProgress({user}) {
  try {
    const result = await axios.get(`/api/progress/${user._id}`, {headers: authHeader})
    return result.data.progress.progress
  } catch (error) {
    console.log(error)
  }
}

export async function updateProgress({newProgress, user}) {
  try {
    console.log(newProgress)
    const result = await axios.post(`/api/progress/${user._id}`, {
      progress: newProgress
    }, {headers: authHeader})
  } catch (error) {
    console.log(error)
  }
}