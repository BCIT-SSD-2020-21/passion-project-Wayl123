const express = require('express')

module.exports = function({database, generateToken}) {
  const router = express.Router()
  
  //POST /api/users
  router.post("/", async (req, res) => {
    try {
      const user = await database.createUser(req.body)
      // Create an jwt from the user details and send the token back to the client
      const accessToken = generateToken({_id: user._id, email: user.email, username: user.username})
      res.send({accessToken: accessToken})
    } catch (error) {
      console.error(error)
      res.status(401).send({error: error.message})
    }
  })
  
  //POST /api/users/login
  router.post("/login", async (req, res) => {
    try {
      const user = await database.getUser(req.body)
      const accessToken = generateToken({_id: user._id, email: user.email, username: user.username})
      res.send({accessToken: accessToken})
    } catch (error) {
      console.log(error)
      res.status(401).send({error: error.message})
    }
  })

  return router
}