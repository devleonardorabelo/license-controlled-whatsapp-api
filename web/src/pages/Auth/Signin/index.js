import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import axios from 'axios'

function Signin() {
	
	const [username, setUsername]= useState('')
	const [password, setPassword]= useState('')
	const [error, setError]= useState(null)

	let history = useHistory()

	async function handleSignin(e){
		e.preventDefault()
		
		const response = await axios.post('http://localhost:21068/auth/signin', {
			username,
			password
		})
	
		if(response.data.error) return setError(response.data.error)

		localStorage.setItem('usertoken', response.data)
		return history.push('/panel')

	}

	return (<>
		<h1>Auth</h1>
		<form onSubmit={handleSignin}>
			<input type="text" name="username" onChange={e => setUsername(e.target.value)} />
			<input type="text" name="password" onChange={e => setPassword(e.target.value)} />
			<button type="submit" >Enviar</button>
		</form>
		<h2>{error}</h2>
	</>)
}

export default Signin