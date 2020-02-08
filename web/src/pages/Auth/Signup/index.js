import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

function Signup() {
	
    const [username, setUsername]= useState('')
    const [whatsapp, setWhatsapp]= useState('')
    const [email, setEmail]= useState('')
	const [password, setPassword]= useState('')

	let history = useHistory()

	async function handleSignin(e){
		e.preventDefault()
		
		const response = await axios.post('http://localhost:21068/auth/signup', {
			username,
            password,
            whatsapp,
            email
		})
		
		localStorage.setItem('usertoken', response.data)
		return history.push('/panel')

	}

	return (<>
		<h1>Signup</h1>
		<form onSubmit={handleSignin}>
			<input type="text" name="username" placeholder="username" onChange={e => setUsername(e.target.value)} />
            <input type="text" name="whatsapp" placeholder="whatsapp" onChange={e => setWhatsapp(e.target.value)} />
            <input type="text" name="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
			<input type="text" name="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
			<button type="submit" >Cadastrar</button>
		</form>
	</>)
}

export default Signup