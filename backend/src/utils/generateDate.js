module.exports = function generateDate(){
    var date  = new Date()

    var day   = ("0" + date.getDate()).slice(-2),
        month = ("0" + date.getMonth()+1).slice(-2),
        year  = date.getFullYear(),
        hour  = ("0" + date.getHours()).slice(-2),
        min   = ("0" + date.getMinutes()).slice(-2),
        sec   = ("0" + date.getSeconds()).slice(-2)

    return fullDate = `${day}/${month}/${year} ás ${hour}:${min}:${sec}`

}