const { Router }        = require('express')
const routes            = Router()
const authMiddleware    = require('../middlewares/auth')
const ContactController = require('../controllers/ContactController')

routes.use(authMiddleware)

routes.get('/', (req, res) => {
    res.send({user: req.userId})
})

routes.get('/contacts')

module.exports = routes