const LocalStrategy = require('passport-local').Strategy
const User          = require('../models/User')
const passport      = require('passport')
const bcrypt        = require('bcryptjs')
const generateDate  = require('../utils/generateDate')
const generateKey   = require('../utils/generateKey')

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use('local-signin', new LocalStrategy(async (username, password, done) => {
    console.log('tentando')
    let user = await User.findOne({username})
    if(!user)
        return done(null, false)
    let compared = await bcrypt.compare(password, user.password)
    if(compared)
        return done(null, user)
    else
        return done(null, false)
}))

passport.use('local-signup', new LocalStrategy({
    passReqToCallback : true
},
    async (req, username, password, done) => {
        let { email, whatsapp } = req.body
        let user = await User.findOne({username})
        if(user)
            return done(null, false)
        let passwordHash = await bcrypt.hash(password, 10)
        user = {
            username,
            password: passwordHash,
            whatsapp,
            email,
            since: generateDate(),
            whatsappKey: generateKey(), //MUDAR PARA NADA DEPOIS DOS TESTES
            recoverKey: await bcrypt.hash(generateKey(), 10),
            active: true
        }
        let newUser = await User.create(user)
        return done(null, newUser)
}))    


