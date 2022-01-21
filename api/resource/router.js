// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

router.get('/resources', (req, res, next) => {
    Resource.find()
      .then(resource => {
        res.json(resource)
      })
      .catch(next)
  })

  router.post('/resources', (req, res, next) => {
    Resource.add(req.body)
      .then(resource => {
        res.status(201).json(resource);
      })
      .catch(next);
  });

module.exports = router
