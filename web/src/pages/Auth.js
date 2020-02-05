import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

function Auth() {
	
	const [username, setUsername]= useState('')
	const [password, setPassword]= useState('')

	let history = useHistory()

	async function handleSignin(e){
		e.preventDefault()
		
		await axios.post('http://localhost:21068/auth/signin', {
			username,
			password
		}).then(response => {
			localStorage.setItem('usertoken', response.data)
			return history.push('/panel')
		}).catch(err => {
			console.log(err)
		})  

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

export default Auth