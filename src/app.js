const express  = require('express')
const mongoose = require('mongoose')
const port     = process.env.PORT || 21068
const app      = express()

mongoose.connect('mongodb://localhost:27017/apiwhatsapp',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json())

const redirects = require('./routes/redirects')
const auth      = require('./routes/auth')
app.use('/', redirects)
app.use('/auth', auth)
app.listen(port, () =>  {
    console.log(`connected in port: ${port}`)
})