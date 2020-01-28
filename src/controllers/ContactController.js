const Customer = require('../models/Customer')
module.exports = {
	async show(req, res) {
		let customer = await Customer.find()
		var arr = []
		var header = ["Name,Given Name,Additional Name,Family Name,Yomi Name,Given Name Yomi,Additional Name Yomi,Family Name Yomi,Name Prefix,Name Suffix,Initials,Nickname,Short Name,Maiden Name,Birthday,Gender,Location,Billing Information,Directory Server,Mileage,Occupation,Hobby,Sensitivity,Priority,Subject,Notes,Language,Photo,Group Membership,Phone 1 - Type,Phone 1 - Value,Phone 2 - Type,Phone 2 - Value,Organization 1 - Type,Organization 1 - Name,Organization 1 - Yomi Name,Organization 1 - Title,Organization 1 - Department,Organization 1 - Symbol,Organization 1 - Location,Organization 1 - Job Description"]

		for (eachArr of customer) {
			arr.push(["(GZ) "+eachArr.name, eachArr.name,"","","","","","","","","","","","","","","","","","","","","","","","","","","* myContacts","Mobile", eachArr.whatsapp,"","","","","","","","","",""])
		}
		return res.render('panel/contacts', {customer: customer, arr: arr, header: header})
	}
}