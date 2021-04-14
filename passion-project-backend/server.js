const express = require('express')
const makeUsersRouter = require('./routers/usersRouter')
const mongoDatabase = require('./mongoDatabase')

const app = express()
app.use(express.json())

mongoDatabase().then(database => {
  console.log(database)
  // const usersRouter = makeUsersRouter({database})
  // app.use('/api/users', usersRouter)
})

const port = process.env.port || 8080
app.listen(port, () => {
  console.log(`The server is listening on port ${port}`)
})