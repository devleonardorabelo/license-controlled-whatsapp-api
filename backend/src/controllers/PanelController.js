const User = require ('../models/User')
const Message = require ('../models/Message')

module.exports = {
    async show(req, res) {

        let message = await Message.find({user: currentUser.id}).populate('customer')
        let status  = {
            news: 0,
            today: 0,
            week: 0,
            month: 0
        }   

        now = new Date
        
        currentMonth = now.getMonth()+1
        currentDay   = now.getDate()

        for (const eachMsg of message) {
            
            let eachDate      = eachMsg.date.split('/') // [0]dayOfWeek, [1]day, [2]month, [3]year
            let initialDay    = (eachDate[1] - eachDate[0]).toString()

            if(eachMsg.new === true) status.news++

            //CURRENT DAY
            if(eachDate[1] == currentDay) status.today++

            //CURRENT WEEK
            if(eachDate[2] == currentMonth && eachDate[1] <= initialDay) status.week++

            //CURRENT MONTH
            if(eachDate[2] == currentMonth) status.month++

        }
        let { username, active, company } = await User.findOne({_id: currentUser.id})
        let user = { username, active, company }

        return res.send({message, status, user})
        
        
    },
    async destroy(req, res){
        await Message.deleteOne({_id: req.query.id})
        let message = await Message.find({user: currentUser.id}).populate('customer')

        return res.send({message})
    }
}