const bcrypt        = require('bcryptjs')
const nodemailer    = require('nodemailer')
const jwt           = require('jsonwebtoken')

const User          = require('../models/User')
const generateKey   = require('../utils/generateKey')
const generateDate  = require('../utils/generateDate')
const crypto        = require('crypto')

module.exports = {
    async signin(req, res) {

        let { username, password } = req.body

        if(!username) res.send({error: 'preencha o usuário'})
        if(!password) res.send({error: 'preencha a senha'})

        let user = await User.findOne({username})
        if(!user){
            let error = 'usuário não encontrado'
            return res.send({error})
        }
        if(!await bcrypt.compare(password, user.password)){
            let error = 'senha incorreta'
            return res.send({error})
        }
        const payload = {
            id: user.id,
            username: user.username,
            whatsapp: user.whatsapp,
            email: user.email
        }

        let token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: 500,
        })
        res.send(token)
        
    },
    async signup(req, res) {
        
        let { username, email, whatsapp, password, company } = req.body
        
        let user = await User.findOne({
            $or:[
                {username},
                {email},
                {whatsapp}
            ]
        })

        const error = []

        if(user) {
            if(user.username == username) error.push('Este usuário já está em uso')
            if(user.whatsapp == whatsapp) error.push('Este whatsapp já está em uso')
            if(user.email == email) error.push('Este email já está em uso')
            if(!username || username.length < 5) error.push('Usuário inválido')
            if(!company || company.length < 5) error.push('Nome de Empresa inválido')
            if(!email || email.length < 15) error.push('Email inválido')
            if(!whatsapp || whatsapp.length < 13) error.push('Whatsapp inválido, ex: 5561998877665')
            if(!password || password.length < 8) error.push('Senha muito curta')    
        }
        

        if(error.length > 0) return res.send({error})

        let passwordHash = await bcrypt.hash(password, 10)
        user = {
            username,
            password: passwordHash,
            company,
            whatsapp,
            email,
            whatsappKey: generateKey(),
            since: generateDate(),
            recoverKey: await bcrypt.hash(generateKey(), 10),
            active: false
        }

        let newUser = await User.create(user)
        
        const payload = {
            id: newUser.id,
            username: newUser.username,
            whatsapp: newUser.whatsapp,
            email: newUser.email
        }

        let token = jwt.sign(payload, process.env.SECRET, {
            expiresIn: 5000,
        })

        res.send(token)

    },
    async recover(req, res) {

        let { email } = req.body

        let alert

        let user = await User.findOne({email})

        if(!user) return res.send({alert: 'Email não registrado em nenhuma conta'})

        try {

            const token = crypto.randomBytes(20).toString('hex')

            const now = new Date()
            now.setHours(now.getHours() + 1)

            await User.updateOne({_id : user.id},{
                '$set': {
                    resetToken: token,
                    expireToken: now
                }
            })
            const transport = await nodemailer.createTransport({
                host: process.env.MAILER_HOST,
                port: process.env.MAILER_PORT,
                secure: false,
                auth: {
                    user: process.env.NO_REPLY_MAIL,
                    pass: process.env.NO_REPLY_PWD
                }
            })
            var mailOptions = {
                from: `Wule | InstantZap <${process.env.NO_REPLY_MAIL}>`,
                to: email,
                subject: 'Recuperação de Senha do GerenciaZap',
                headers: {
                    'MIME-Version': '1.0',
                    'Message-ID': '', 
                    'From': 'Agência Digital Wule <noreply@wule.com.br>',
                    'Organization': 'Agência Digital Wule',
                },
                dkim: {
                    domainName: "wule.com.br",
                    keySelector: "1578084474.wule",
                    privateKey: "-----BEGIN RSA PRIVATE KEY-----MIICXAIBAAKBgQDBBBA2rEwgVaihBj3ZI21yzjdofKAqvNM7lDD2asOcGV8prdMASnIxEdE8K9YjqFfXrk9zP6pRxHGGsVWm7tEgpvvmPE03hX4sTQQ8AOiYUG9MX7B2crhrf5MKe+kmFru8nYb8/zHpffjgb2lwhGaOYNBnaLnDKMHK6F9XzxlXCwIDAQABAoGAO6yr7ptadezF0/MAEDAZ2JLVIqLVSiFTFWp9sNHVZF+bwmERiVd68pzVmcrby+5yKiakPbeDSwB3MPOGzbOsR+dtiZlDH2XKT1UxzlrrXDddYguNKUl36PHITZzfn/a/ya9pbO5oRqsE836H808KWC/x/Z1LEa79Kt/KOyrl8PECQQD95td1MLjaFpB7/qfluGW5nDjFSZEynY05E4m1NaTC0qkynQD2W7oyxUOOc6aJJF7BhfAbdyRH4jmk2uPcAa/HAkEAwpxpISkr5vEvHZkA4UZ+6uZDX/12dphS0d2wKnkFrpQkLlsCIF9BXrbNhy+7l0YJYvi5+Gx0JdjMDXP9oD8mnQJATcMtqg7KDsFqbw+HjKv1O+vE12e4uK/YWOrK+lz7oU+z0nSTnuBpHrOcBT0WfFpPSyYia8cJrZpz3THNJ8y8cQJAb3BRYwPId/40FKbAsj9D/g7NFfJ2G4MuKa7gafHTJxz9eu3yUcc6D5puJrNWoFEinuH+3Bp+iA2VCz8YROLkoQJBAKJOV7lnNeKopKmtBAB0yZE4IwnEq8FdmC1hQf1Cz8NWEtPTL1kE/LnHqyvN/XDmkY3lCQG6XQUohMX5j8i28aU=-----END RSA PRIVATE KEY-----"
                },
                html: `<h3>Clique no link abaixo para fazer um nova senha</h3><a href="${process.env.DOMAIN_CLIENT}/updatepwd/${token}">Recuperar minha senha agora!</a>`
            };

            let sent = await transport.sendMail(mailOptions)
            
            if(!sent) res.status(400).send({alert: 'Houve um erro, tente novamente'})

            return res.send({
                alert: 'Foi enviado um email para a recuperação da sua senha',
                success: true
            })

        } catch (err) {
            return res.send({alert: 'Houve um erro. Tente novamente'})
        }
      
    },
    
    async update(req, res){

        let { password, confirm, key } = req.body

        const now = new Date()

        const token = crypto.randomBytes(20).toString('hex')

        let user = await User.findOne({resetToken: key})

        if(!user) return res.send({alert: 'Token inválido'})

        if(user.expireToken <= now) return res.send({alert: 'Token expirado'})

        if(password !== confirm) return res.send({alert: 'Senhas não batem'})

        if(!password || !confirm) return res.send({alert: 'Campos inválidos'})

        await User.updateOne({
            _id : user.id
        },{
            '$set': {
                password: await bcrypt.hash(password, 10),
                expireToken: now
            }
        })

        return res.send({
            alert: 'senha alterada, pode logar agora',
            success: true
        })
   
    },

}