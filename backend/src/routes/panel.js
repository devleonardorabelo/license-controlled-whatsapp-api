const { Router }        = require('express')
const routes            = Router()
const authMiddleware    = require('../middlewares/auth')
const ContactController = require('../controllers/ContactController')
const PanelController   = require('../controllers/PanelController')
const ProfileController = require('../controllers/ProfileController')

routes.use(authMiddleware)

routes.get('/', PanelController.show)

routes.get('/contacts', ContactController.show)

routes.get('/profile', ProfileController.show)

routes.post('/update/data', ProfileController.update)

routes.post('/update/password', ProfileController.updatePwd)

routes.delete('/delete', PanelController.destroy)

module.exports = routes