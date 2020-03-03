const stripe      = require('stripe')(process.env.PAYMENT_SECRET_KEY)
const User        = require('../models/User')
const generateKey = require('../utils/generateKey')

module.exports = {
    async checkout(req, res) {
        const { sessionId } = req.query
        const session = await stripe.checkout.sessions.retrieve(sessionId)
        res.send(session)
        console.log(session)
    },
    async create(req, res) {
        const planId = process.env.PAYMENT_PRODUCT_ID
        const domainUrl = process.env.DOMAIN
        let session

        session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          subscription_data: {
            items: [
              {
                plan: planId
              }
            ]
          },
          success_url: `${domainURL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${domainURL}/payment`
        })
  
        res.send({
          checkoutSessionId: session.id
        })
      },
      async public(req, res) {
        res.send({
          publicKey: process.env.PAYMENT_PUBLIC_KEY
        })
      },
      async store(req, res) {
        await User.updateOne({_id: req.user.id},{whatsappKey: generateKey()})
        return res.redirect('/panel')
      }    
}