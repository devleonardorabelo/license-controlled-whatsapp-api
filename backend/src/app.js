const express      = require('express')
const mongoose     = require('mongoose')
const port         = process.env.PORT || 21068
const app          = express()
const cookieParser = require('cookie-parser')
const bodyParser   = require('body-parser')
const session      = require('express-session')
const exphbs       = require('express-handlebars')
const path         = require('path')
const cors         = require('cors')

app.use(cors()) // ALTERAR PARA URL ESPECIFICA

mongoose.connect('mongodb://localhost:27017/apiwhatsapp',{//mongodb://localhost:27017/apiwhatsappmongodb://wule02:91427507@mongodb.wule.com.br/wule02
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
  console.log('conectado ao bd')
})

app.engine('handlebars', exphbs());
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname,'public')))
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(session({
    secret: '44(%09u7*jgjtk&218g1erg41fstkytdr8',
    resave: true,
    saveUninitialized: true
}))
app.use(
  express.json({
    verify: function(req, res, buf) {
      if (req.originalUrl.startsWith("/webhook")) {
        req.rawBody = buf.toString();
      }
    }
  })
)

const auth      = require('./routes/auth')
const panel     = require('./routes/panel')
const message   = require('./routes/message')
const payment   = require('./routes/payment')

app.use('/auth', auth)
app.use('/panel', panel)
app.use('/', message)
app.use('/payment', payment)

app.listen(port, () =>  {
    console.log(`connected in port: ${port}`)
})