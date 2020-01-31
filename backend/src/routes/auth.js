const { Router }     = require('express')
const passport       = require('passport')
const LocalStrategy  = require('passport-local').Strategy
const routes         = Router()

const AuthController = require('../controllers/AuthController')
const User           = require('../models/User')

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use('local-signin', new LocalStrategy(AuthController.signin))

passport.use('local-signup', new LocalStrategy({passReqToCallback : true},AuthController.signup))  

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