const { Router } = require('express')
const routes     = Router()

//FAZER VERIFICAÇÃO DE AUTENTICIDADE

routes.get('/', (req, res) => {
    res.json({user: req.user})
})

module.exports = routes