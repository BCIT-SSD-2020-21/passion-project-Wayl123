import React, {useState} from "react"

export default function Login({loginUser}) {
  const [loginSignup, setLoginSignup] = useState(false)

  const handleSwitchClick = () => {
    setLoginSignup(!loginSignup)
  }

  const handleSignup = (e) => {
    e.preventDefault()
    loginUser({type: "signup", username: e.target.user.value, password: e.target.pass.value})
  }
  
  const handleLogin = (e) => {
    e.preventDefault()
    loginUser({type: "login", username: e.target.user.value, password: e.target.pass.value})
  }

  return(
    <div>
      {
        loginSignup ?
          <span>
            <h3>Sign up</h3>
            <form index={1} onSubmit={handleSignup}>
              <input name="user" type="text" placeholder="Username" />
              <input name="pass" type="password" placeholder="Password" />
              <button type="submit">Submit</button>
            </form>
            <button onClick={handleSwitchClick}>Already have an account? Login here.</button>
          </span>
        :
          <span>
            <h3>Login</h3>
            <form index={0} onSubmit={handleLogin}>
              <input name="user" type="text" placeholder="Username" />
              <input name="pass" type="password" placeholder="Password" />
              <button type="submit">Submit</button>
            </form>
            <button onClick={handleSwitchClick}>Don't have an account? Register here.</button>
          </span>
      }
    </div>
  )
}