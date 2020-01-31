import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../services/api'

function Auth() {

	const [username, setUsername]= useState('')
	const [password, setPassword]= useState('')

	let history = useHistory()

	async function handleShow(e){
		e.preventDefault()	
		
		const response = api.post('/auth/login',{
			username,
			password,
		})

		history.push('/panel')
	}

	return (<>
		<h1>Auth</h1>
		<form onSubmit={handleShow}>
			<input type="text" name="username" onChange={e => setUsername(e.target.value)} />
			<input type="text" name="password" onChange={e => setPassword(e.target.value)} />
			<button type="submit">Enviar</button>
		</form>
	</>)
}

export default Auth