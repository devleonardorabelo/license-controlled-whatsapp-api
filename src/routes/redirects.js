const { Router } = require('express')
const routes     = Router()
const User       = require('../models/User')

const FormController = require('../controllers/FormController')

routes.get('/', (req, res) => res.render('form'))

routes.post('/send', FormController.store)
    
module.exports = routes