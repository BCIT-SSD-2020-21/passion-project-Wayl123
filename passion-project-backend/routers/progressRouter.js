const express = require('express')

module.exports = function({database, authorize}) {
  const router = express.Router()

  //GET /api/progress/userId
  router.get('/:userId', authorize, async (req, res) => {
    const userId = req.params.userId
    const progress = await database.getProgress({userId: userId})
    res.send({progress})
  })
  
  //POST /api/progress
  router.post("/:userId", authorize, async (req, res) => {
    const userId = req.params.userId
    console.log(req.body)
    const progress = await database.createProgress({newProgress: req.body, userId: userId})
    res.send({progress})
  })

  return router
}