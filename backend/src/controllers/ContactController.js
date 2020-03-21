const Customer = require('../models/Customer')
module.exports = {
	async show(req, res) {

		let currentUser = req.headers.user

		let customers = await Customer.find({user: currentUser.id})
		var arr = []
		var header = ["Name,Given Name,Additional Name,Family Name,Yomi Name,Given Name Yomi,Additional Name Yomi,Family Name Yomi,Name Prefix,Name Suffix,Initials,Nickname,Short Name,Maiden Name,Birthday,Gender,Location,Billing Information,Directory Server,Mileage,Occupation,Hobby,Sensitivity,Priority,Subject,Notes,Language,Photo,Group Membership,Phone 1 - Type,Phone 1 - Value,Phone 2 - Type,Phone 2 - Value,Organization 1 - Type,Organization 1 - Name,Organization 1 - Yomi Name,Organization 1 - Title,Organization 1 - Department,Organization 1 - Symbol,Organization 1 - Location,Organization 1 - Job Description"]

		arr.push([header])
		for (eachArr of customers) {
			arr.push(["(GZ) "+eachArr.name, eachArr.name,"","","","","","","","","","","","","","","","","","","","","","","","","","","* myContacts","Mobile", eachArr.whatsapp,"","","","","","","","","",""])
		}

		let csvContent = "data:text/csv;charset=utf-8," + arr.map(e => e.join(",")).join("\n");
		var encContacts = encodeURI(csvContent)

		return res.send({encContacts, customers})
	}
}