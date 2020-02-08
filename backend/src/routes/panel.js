const { Router }        = require('express')
const routes            = Router()
const authMiddleware    = require('../middlewares/auth')
const ContactController = require('../controllers/ContactController')
const PanelController   = require('../controllers/PanelController')

routes.use(authMiddleware)

routes.get('/', (PanelController.show))

routes.get('/contacts')

module.exports = routes