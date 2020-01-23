const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
    customerId : String,
    message    : String,
    userId     : String,
})
module.exports = mongoose.model('Message', MessageSchema)