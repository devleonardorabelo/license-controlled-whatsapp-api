const { Router } = require('express')
const routes     = Router()
const User       = require('../models/User')

const FormController = require('../controllers/FormController')

routes.post('/send', FormController.store)
    
module.exports = routes