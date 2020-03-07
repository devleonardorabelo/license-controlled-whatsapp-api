const User     = require('../models/User')
const Message  = require('../models/Message')
const Customer = require('../models/Customer')

module.exports = {

    async store(req, res) {
        if(!req.query.key) return res.status(400).json({message: 'requisição invalida'})

        let key = req.query.key
  
        let user = await User.findOne({whatsappKey: key})
        
        if(!user) return res.status(400).json({message: 'usuario não registrado ou não ativo'})
        
        const { name, email, whatsapp, message } = req.body

        let customer = await Customer.findOne({whatsapp})

        if(customer){
            currentCustomer = customer.id
        }else{            
            let customer = {
                name,
                whatsapp,
                email,
                user: user.id
            }
            let newCustomer = await Customer.create(customer)
            currentCustomer = newCustomer.id
        }

        let date    = new Date()

        //DATE      
        let dayWeek  = date.getDay()
        let day      = date.getDate()
        let month    = date.getMonth()
        let year     = date.getFullYear()
        let fullDate = `${dayWeek}/${day}/${month}/${year}`

        //HOUR
        let hour     = date.getHours()
        let minutes  = date.getMinutes()

        let time     = `${hour}:${minutes}`

        await Message.create({
            customer: currentCustomer,
            message,
            user: user.id,
            url: req.get('referer'),
            date: fullDate,
            time: time
        })

        return res.json({message: 'mensagem salva'})


    }
}