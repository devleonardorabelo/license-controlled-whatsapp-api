const stripe      = require('stripe')('sk_test_C7mmc6ytFxBLwtc3yE2YzzUc00uTFsZUQB')
const User        = require('../models/User')
const generateKey = require('../utils/generateKey')

module.exports = {
  async index(req, res) {

    let currentUser = req.headers.user

    const user = await User.findOne({_id: currentUser.id})

    if(user.active === true) return res.json({active: true})

    return res.json({active: false})
  },
  async store(req, res) {

    let currentUser = req.headers.user

    await User.updateOne({
      _id: currentUser.id
    },{
      active: true,
    })
    
    return res.json({paid: true})
  }
}