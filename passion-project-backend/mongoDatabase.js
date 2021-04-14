const { MongoClient, ObjectID } = require('mongodb')
const bcrypt = require('bcryptjs')

const url = require('./secrets')
const client = new MongoClient(url.mongoUrl, {useUnifiedTopology: true, useNewUrlParser: true})

module.exports = async function() {
  try {
    await client.connect()

    console.log(client.isConnected())

} catch (e) {
    console.error(e);
} finally {
    await client.close();
}
  // await client.connect()

  // const db = client.db()

  // const users = db.collection('users')

  // await listDatabases(client)

  // await client.close()
}