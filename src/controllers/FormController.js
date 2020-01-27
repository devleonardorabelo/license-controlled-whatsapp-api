const User     = require('../models/User')
const Message  = require('../models/Message')
const Customer = require('../models/Customer')

module.exports = {
    async store(req, res) {
        if(!req.query.key)
            return res.status(400).json({message: 'requisição invalida'})

        let key = req.query.key

        let user = await User.findOne({whatsappKey: key, active: true})

        if(!user)
            return res.status(400).json({message: 'usuario não registrado ou não ativo'})
        
        const { name, email, whatsapp, message } = req.body

        let customer = await Customer.findOne({whatsapp})

        if(customer){
            currentCustomer = customer.id
            console.log(currentCustomer)
        }else{            
            let customer = {
                name,
                whatsapp,
                email,
                userId: user.id
            }
            let newCustomer = await Customer.create(customer)
            currentCustomer = newCustomer.id
        }

        await Message.create({
            customer: currentCustomer,
            message,
            userId: user.id,
            url: req.get('referer')
        })

        return res.json({message: 'mensagem salva'})


    }
}