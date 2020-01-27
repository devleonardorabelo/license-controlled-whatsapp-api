const mongoose = require('mongoose')

const CustomerSchema = new mongoose.Schema({
    name     : String,
    whatsapp : String,
    email    : String,
    user     : {
    	type: String,
    	ref : 'User'
    },
})

module.exports = mongoose.model('Customer', CustomerSchema)