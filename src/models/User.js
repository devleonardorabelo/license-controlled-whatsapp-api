const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    key      : String,
    whatsapp : String
})
module.exports = mongoose.model('User', UserSchema)