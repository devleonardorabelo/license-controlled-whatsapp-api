const jwt = require('jsonwebtoken')
const config = require('../../config/configs')

module.exports = function generateToken(params = {}) {
	return jwt.sign(params, config.secret, {
		expiresIn: 86400,
	})
}