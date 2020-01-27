const { Router }      = require('express')
const routes          = Router()
const PanelController = require('../controllers/PanelController.js')

async function authCheck(req, res, next) {
	if (req.isAuthenticated())
		return next()
	else
		return res.redirect('/auth/signin')
}

routes.get('/', authCheck, PanelController.show)
module.exports = routes