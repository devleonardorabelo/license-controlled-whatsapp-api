const { Router } = require('express')
const routes = Router()
const AuthController = require('../controllers/AuthController')
const passport = require('passport')
require('../config/passport')

routes.post('/signin', passport.authenticate('local-signin',{
    successRedirect: '/panel',
    failureRedirect: '/auth/signin',
}))

routes.post('/signup', passport.authenticate('local-signup',{
    successRedirect: '/panel',
    failureRedirect: '/auth/signup',
}))

routes.post('/recover', AuthController.recover)
routes.post('/recover/new', AuthController.update)
module.exports = routes