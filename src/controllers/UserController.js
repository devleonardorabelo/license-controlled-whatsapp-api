const bcrypt = require('bcryptjs')
const generateDate = require('../utils/generateDate')
const User         = require('../models/User')

module.exports = {
    async store(req, res) {
        let since = generateDate()

        let { username, password, whatsapp } = req.body

        let passwordHash = await bcrypt.hash(password, 10)
        
        let user = await User.findOne({whatsapp})

        if(!user){
            user = {
                username,
                password: passwordHash,
                whatsapp,
                since,
                key: 'test'
            }
            await User.create(user)

            return res.json({user})
        }
        return res.json({message: 'esse usuario ja existe'})
    }
}