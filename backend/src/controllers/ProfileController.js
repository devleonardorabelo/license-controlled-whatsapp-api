const User = require('../models/User')

module.exports = {
    async show(req, res) {
        let { whatsapp, email, active, whatsappKey, company } = await User.findOne({_id: currentUser.id})
        const data = { whatsapp, email, active, whatsappKey, company }
        return res.send(data)
    },
    async update(req, res) {

        let { company, whatsapp } = req.body
        const alert = []

        let haveWhatsapp = await User.findOne({whatsapp})

        if(haveWhatsapp.whatsapp != null && haveWhatsapp.whatsapp != currentUser.whatsapp) alert.push('Esse whatsapp já está sendo usado')
        if(!company || company.length <= 4) alert.push('Nome da Empresa inválido')
        if(!whatsapp || whatsapp.length < 13) alert.push('Email incompleto ou inválido')

        if(alert.length > 0) return res.send({alert})
        
        try{

            await User.updateOne({_id: currentUser.id},{
                company,
                whatsapp,
            })

            alert.push('Alteração salva com sucesso')
            return res.send({alert})

        } catch (err) {
            return res.status(401).send({alert: 'Houve um erro, tente novamente'})
        }
        
    }
}