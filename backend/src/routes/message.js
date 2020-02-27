const { Router } = require('express')
const routes     = Router()
const User       = require('../models/User')

const MessageController = require('../controllers/MessageController')

routes.get('/', (req, res) => res.render('form'))

routes.post('/send', MessageController.store)
    
module.exports = routes