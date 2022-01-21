// build your `/api/tasks` router here
const router = require('express').Router()
const Tasks = require('./model')

router.get('/tasks', (req, res, next) => {
    Tasks.find()
      .then(task => {
        res.json(task)
      })
      .catch(next)
  })

  router.post('/tasks', (req, res, next) => {
    Tasks.add(req.body)
      .then(task => {
        res.status(201).json(task);
      })
      .catch(next);
  });

module.exports = router