const express      = require('express')
const mongoose     = require('mongoose')
const port         = process.env.PORT || 21068
const app          = express()
const bodyParser   = require('body-parser')
const path         = require('path')
const cors         = require('cors')

require('dotenv').config()

app.use(cors()) // ALTERAR PARA URL ESPECIFICA

mongoose.connect(`${process.env.BD}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
  console.log('conectado ao bd')
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

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
