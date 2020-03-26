const User = require('../models/User')

module.exports = {
	async show(req, res) {

		const currentUser = req.headers.user

		let { whatsappKey, company } = await User.findOne({_id: currentUser.id})

		return res.send({ whatsappKey, company })

	}
}
