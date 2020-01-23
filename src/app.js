const express  = require('express')
const mongoose = require('mongoose')
const port     = process.env.PORT || 21068
const app      = express()
const cookieParser = require('cookie-parser')
const bodyParser   = require('body-parser')
const session      = require('express-session')
const passport     = require('passport')

mongoose.connect('mongodb://localhost:27017/apiwhatsapp',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(session({
    secret: '44(%09u7*jgjtk&218g1erg41fstkytdr8',
    resave: true,
    saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

const redirects = require('./routes/redirects')
const auth      = require('./routes/auth')
const panel     = require('./routes/panel')

app.use('/', redirects)
app.use('/auth', auth)
app.use('/panel', panel)
app.listen(port, () =>  {
    console.log(`connected in port: ${port}`)
})