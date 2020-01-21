const generateKey = require('../utils/generateKey')
const User        = require('../models/User')

module.exports = {
    async store(req, res) {
        let key = generateKey()
        console.log(key)

        let { username, password, whatsapp } = req.body

        let user = await User.findOne({username})

        /*if(!user){
            user = User.create({
                username,
                password: passwordHash,
                whatsapp
            })
        }*/
        return res.json({message: 'esse usuario ja existe'})
    }
}