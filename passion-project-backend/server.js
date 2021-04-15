const express = require('express')
const makeUsersRouter = require('./routers/usersRouter')
const makeProgressRouter = require('./routers/progressRouter')
const jwt = require('./jwt')
const mongoDatabase = require('./mongoDatabase')

const app = express()
app.use(express.json())

mongoDatabase().then(database => {
  console.log(database)
  const usersRouter = makeUsersRouter({database, generateToken: jwt.generateToken})
  app.use('/api/users', usersRouter)

  const progressRouter = makeProgressRouter({database, authorize: jwt.authorize})
  app.use('/api/progress', progressRouter)
})

const port = process.env.port || 8080
app.listen(port, () => {
  console.log(`The server is listening on port ${port}`)
})