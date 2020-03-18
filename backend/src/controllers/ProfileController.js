const User = require('../models/User')

module.exports = {
    async show(req, res) {
        let { whatsapp, email, active, whatsappKey, company } = await User.findOne({_id: currentUser.id})
        const data = { whatsapp, email, active, whatsappKey }
        return res.send(data)
    },
    async update(req, res) {
        console.log('tentando')
        let { company, email, whatsapp } = req.body
        
        try{

            await User.updateOne({_id: currentUser.id},{
                company,
                whatsapp,
                email
            })

            return res.send({status: 'Alteração salva com sucesso'})

        } catch (err) {
            return res.status(401).send({error: 'Houve um erro, tente novamente'})
        }
        
    }
}