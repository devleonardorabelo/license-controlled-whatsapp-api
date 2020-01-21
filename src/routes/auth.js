const { Router } = require('express')
const routes = Router()
const UserController = require('../controllers/UserController')

routes.post('/signin', UserController.store)

module.exports = routes