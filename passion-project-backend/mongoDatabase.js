const { MongoClient, ObjectID } = require('mongodb')
const bcrypt = require('bcryptjs')

const url = require('./secrets')
const client = new MongoClient(url.mongoUrl, {useUnifiedTopology: true, useNewUrlParser: true})

module.exports = async function() {
  await client.connect()
  const db = client.db()

  const users = db.collection('users')
  const progress = db.collection('progress')

  async function createUser({username, password}) {
    const encrypted = await bcrypt.hash(password, 12)
    const user = await users.findOne({
      $or: [{ username }]
    })
    if (user) {
      throw Error("username already taken")
    }
    const result = await users.insertOne({
      username,
      password: encrypted
    })

    return result.ops[0]
  }

  async function getUser({username, password}) {
    const user = await users.findOne({
      username: username
    })
    if (!user) {
      throw Error("Invalid username")
    }

    const same = await bcrypt.compare(password, user.password)
    if (!same) {
      throw Error("Passwords don't match")
    }

    return user
  }

  async function getProgress({userId}) {
    return await progress
      .findOne({userId: userId})
  }
  
  async function createProgress({newProgress, userId}) {
    const result = await progress.findOneAndUpdate(
      {userId: userId}, //query
      {$set: {...newProgress}}, //updateData
      {upsert: true} //options
    )
    return result
  }

  return {
    createUser,
    getUser,
    getProgress,
    createProgress
  }
}