const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    username    : String,
    password    : String,
    whatsapp    : String,
    since       : String,
    whatsappKey : String,
    active      : Boolean
})


module.exports = mongoose.model('User', UserSchema)