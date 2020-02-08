const User = require ('../models/User')
const Message = require ('../models/Message')

module.exports = {
    async show(req, res) {
 
        let message = await Message.find({user: currentUser.id}).populate('customer')
        
        res.send(message)
        
    }
}