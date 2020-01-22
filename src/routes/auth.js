const { Router } = require('express')
const routes = Router()
const UserController = require('../controllers/UserController')

routes.post('/signup', UserController.store)

module.exports = routes