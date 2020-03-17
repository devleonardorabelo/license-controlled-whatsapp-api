const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    username    : String,
    password    : String,
    whatsapp    : String,
    email       : String,
    company     : String,
    since       : String,
    whatsappKey : String,
    idStripe    : String,
    active      : Boolean,
    resetToken  : String,
    expireToken : Date
})


module.exports = mongoose.model('User', UserSchema)