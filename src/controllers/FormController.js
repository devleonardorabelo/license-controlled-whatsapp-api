const User     = require('../models/User')
const Message  = require('../models/Message')
const Customer = require('../models/Customer')

module.exports = {
    async store(req, res) {
        if(!req.query.key)
            return res.status(400).json({message: 'requisição invalida'})

        let key = req.query.key

        let user = await User.findOne({key, active: true})

        if(!user)
            return res.status(400).json({message: 'usuario não registrado ou não ativo'})
        
        const { name, email, whatsapp, message } = req.body

        let findCustomer = await Customer.findOne({whatsapp})
        console.log(findCustomer.id)

        if(findCustomer){
            let currentCustomer = findCustomer.id
        }else{            
            let customer = await Customer.create({
                name,
                whatsapp,
                email
            })
            let currentCustomer = customer.id
        }
        /*await Message.create({
            userId: currentCustomer,
            message
        })*/

        res.json({message: 'mensagem salva'})


    }
}