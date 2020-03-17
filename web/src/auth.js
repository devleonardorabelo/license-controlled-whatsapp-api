import jwt from 'jsonwebtoken'

export const isAuthenticated = () => {

  const token = localStorage.getItem('usertoken')
  let secret = process.env.REACT_APP_SECRET
	let logged = false

    jwt.verify(token, secret, (err, decoded) => {
    	if(err) logged = false
  		if(decoded) logged = true
    })

    if(logged === true) return true

    return false

}