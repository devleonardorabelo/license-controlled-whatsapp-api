const { Router }     = require('express')
const routes         = Router()
const AuthController = require('../controllers/AuthController')
const User           = require('../models/User')

routes.post('/signin', AuthController.signin)

routes.post('/signup', AuthController.signup)

routes.post('/recover', AuthController.recover)

routes.post('/recover/new', AuthController.update)

module.exports = routes