const stripe      = require('stripe')('sk_test_C7mmc6ytFxBLwtc3yE2YzzUc00uTFsZUQB')
const User        = require('../models/User')
const generateKey = require('../utils/generateKey')

module.exports = {
  async store(req, res) {

    let currentUser = req.headers.user
    console.log(currentUser)

    const payment = req.body.payment_method

    try{
      
      let customer = await stripe.customers.create({
        payment_method: payment,
        email: currentUser.email,
        invoice_settings: {
          default_payment_method: payment
        }
      })
      
      console.log(customer)

      stripe.paymentMethods.attach(payment,
        {customer: customer.id},
      );
      
      const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [{ plan: process.env.PLAN }],
        expand: ["latest_invoice.payment_intent"]
      });

      await User.updateOne({
        _id: currentUser.id
      },{
        active: true,
        idStripe: subscription.customer,
      })
      
      res.send({paid: true})
      
    } catch(err) {
      console.log(err)
    }
    
  }
}