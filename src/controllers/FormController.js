module.exports = {
    async store(req, res) {
        if(!req.query.key)
            return res.status(400)

        let key = req.query.key
        let user = await User.findOne({key})

        return res.json({user})
    }
}