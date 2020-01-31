const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    username    : String,
    password    : String,
    whatsapp    : String,
    email       : String,
    since       : String,
    whatsappKey : String,
    active      : Boolean,
    recoverKey  : String,
})


module.exports = mongoose.model('User', UserSchema)