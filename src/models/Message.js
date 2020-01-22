const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema({
    userId  : String,
    message : String
})
module.exports = mongoose.model('Message', MessageSchema)