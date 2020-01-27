const { Router } = require('express')
const routes = Router()
const AuthController = require('../controllers/AuthController')
const passport = require('passport')
require('../config/passport')

routes.get('/signin', (req, res) =>	res.render('auth/signin'))

routes.post('/signin', passport.authenticate('local-signin',{
    successRedirect: '/panel',
    failureRedirect: '/auth/signin',
}))

routes.get('/signup', (req, res) => res.render('auth/signup'))

routes.post('/signup', passport.authenticate('local-signup',{
    successRedirect: '/panel',
    failureRedirect: '/auth/signup',
}))

routes.get('/logout', (req, res) => {
	req.logout()
	return res.redirect('/auth/signin')
})

routes.post('/recover', AuthController.recover)

routes.post('/recover/new', AuthController.update)

module.exports = routes