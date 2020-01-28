const User        = require('../models/User')
const nodemailer  = require('nodemailer')
const bcrypt      = require('bcryptjs')
const generateKey = require('../utils/generateKey')

module.exports = {
    async recover(req, res) {
        let { email } = req.body

        let user = await User.findOne({email})

        const transport = nodemailer.createTransport({
            host: "smtp.umbler.com",
            port: 587,
            secure: false,
            auth: {
                user: '', //EDIT
                pass: '' //EDIT
            }
        })
        var mailOptions = {
            from: 'Wule | InstantZap <leonardo@wule.com.br>',
            to: email,
            subject: 'Recuperação de Senha do InstantZap',
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
            html: `<a href='https://localhost:21068/auth/recover/new?${user.recoverKey}'>Recuperar agora</h1>`
        };
        transport.sendMail(mailOptions)
        console.log(mailOptions.to)

        return res.json({email})
    },
    
    async update(req, res){
        let { key } = req.query
        let { password, confirmPassword } = req.body
        
        if(password == confirmPassword) {
            await User.updateOne({recoverKey: key},{
                password: await bcrypt.hash(password, 10),
                recoverKey: await bcrypt.hash(generateKey(), 10)
            })    
        } else {
            return res.json({erro: "senhas não coincidem"})
        }
        return res.json({status: "senha alterada"})
         
    } 
}
