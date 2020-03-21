const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = {
    async show(req, res) {

        let currentUser = req.headers.user

        let { whatsapp, email, active, whatsappKey, company } = await User.findOne({_id: currentUser.id})
        const data = { whatsapp, email, active, whatsappKey, company }
        return res.send(data)
    },
    async update(req, res) {

        let currentUser = req.headers.user

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
        
    },
    async updatePwd(req, res) {

        let currentUser = req.headers.user

        let { currentPwd, newPwd, confirmPwd } = req.body
        
        const alert = []

        try {

            let user = await User.findOne({_id: currentUser.id})

            if(!await bcrypt.compare(currentPwd, user.password)) alert.push('Senha atual não é esta')
            if(newPwd != confirmPwd) alert.push('Novas senhas não batem')
            if(!newPwd || newPwd.length < 8) alert.push('Senha muito curta')

            if(alert.length > 0) return res.status(200).send({alert})
            
            let passwordHash = await bcrypt.hash(newPwd, 10)

            await User.updateOne({
                _id: currentUser.id
            },{
                password: passwordHash
            })

            alert.push('Senha alterada com sucesso')

            return res.status(200).send({alert})
 
        } catch(err) {
            return res.status(401).send({alert: 'Hourve um erro, tente novamente'})
        }

    }
}