const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
    customer   : {
    	type: String,
    	ref : 'Customer'
    },
    message    : String,
    user       : {
    	type: String,
    	ref : 'User'
    },
    url        : String
})
module.exports = mongoose.model('Message', MessageSchema)