// build your `/api/projects` router here
const router = require('express').Router()
const Projects = require('./model')

router.get('/projects', (req, res, next) => {
    Projects.find()
      .then(project => {
        res.json(project)
      })
      .catch(next)
  })

  router.post('/projects', (req, res, next) => {
    Projects.add(req.body)
      .then(project => {
        res.status(201).json(project);
      })
      .catch(next);
  });

module.exports = router