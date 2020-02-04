import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../services/api'


function Auth() {
	
	const [username, setUsername]= useState('')
	const [password, setPassword]= useState('')

	let history = useHistory()

	async function formTest(e) {e.preventDefault() } 
	async function handleSignin(){
		
		const data = { username, password }
		console.log(data)

		const requestInfo = {
			method: 'POST',
			body: JSON.stringify(data),
			headers: new Headers({
				'Content-type': 'application/json'
			}),
		}
		
		fetch('http://localhost:21068/auth/signin', requestInfo)
		.then(response => {
			if(response.ok) {
				return response.json()
			}
			throw new Error('Login invalido...');
		})
		.then(token => {
			localStorage.setItem('token', token);
			console.log(token)
			history.push('/panel')
		})

	}

	return (<>
		<h1>Auth</h1>
		<form onSubmit={formTest}>
			<input type="text" name="username" onChange={e => setUsername(e.target.value)} />
			<input type="text" name="password" onChange={e => setPassword(e.target.value)} />
			<button type="submit" onClick={handleSignin}>Enviar</button>
		</form>
	</>)
}

export default Auth