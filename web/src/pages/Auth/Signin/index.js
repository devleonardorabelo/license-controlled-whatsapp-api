import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

function Signin() {
	
	const [username, setUsername]= useState('')
	const [password, setPassword]= useState('')

	let history = useHistory()

	async function handleSignin(e){
		e.preventDefault()
		
		const response = await axios.post('http://localhost:21068/auth/signin', {
			username,
			password
		})
		console.log(response)
		
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
	</>)
}

export default Signin