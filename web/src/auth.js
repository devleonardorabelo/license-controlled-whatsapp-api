import jwt from 'jsonwebtoken'

export const isAuthenticated = () => {

	const token = localStorage.getItem('usertoken')
  let secret = '46427cf0549b43729f1bea3372b92f2f'
	let logged = false

    jwt.verify(token, secret, (err, decoded) => {
    	if(err) logged = false
  		if(decoded) logged = true
    })

    if(logged === true) return true

    return false

}