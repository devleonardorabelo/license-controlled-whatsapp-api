const User = require('../models/User')
const Message = require('../models/Message')
module.exports = {
	async show(req, res,next) {
		let message = await Message.findOne({userId: req.user.id}).populate('customer')
		return res.render('panel/home', {message: message, user: req.user})
	},
}