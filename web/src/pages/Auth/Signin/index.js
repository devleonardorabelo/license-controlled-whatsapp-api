import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { } from '../../../components/StyledComponents'
import styled from 'styled-components'

import axios from 'axios'

function Signin() {
	
	const [username, setUsername]= useState('')
	const [password, setPassword]= useState('')
	const [isError, setIsError] = useState(false)
	const [error, setError]= useState(null)

	let history = useHistory()

	const Alert = styled.div`
		display: ${isError ? "block" : "none"};
		position: absolute;
		padding: 10px 20px;
		color: #fff;
		font-weight: bold;
		border-radius: 10px;
		background: red;
		right: 10px;
		top: 10px;
	`;

	async function handleSignin(e){
		e.preventDefault()
		
		const response = await axios.post(`${process.env.REACT_APP_BACK_DOMAIN}/auth/signin`, {
			username,
			password
		})
	
		if(response.data.error){
			setIsError(true)
			setError(response.data.error)
			return setTimeout(() => {
				setIsError(false)
				setError(null)
			}, 3000)
		}

		localStorage.setItem('usertoken', response.data)
		return history.push('/panel')

	}

	return (<>

				<form as="form" onSubmit={handleSignin}>
					<h2>Entrar</h2>
					<input name="username" placeholder="usuário" onChange={e => setUsername(e.target.value)}/>
					<input name="password" type="password" placeholder="senha" onChange={e => setPassword(e.target.value)}/>
					<div>
						<button type="submit">entrar</button>
						<Link to="/signup">
							<button as="div">Não tem uma conta? Clique aqui!</button>
						</Link>
						
					</div>
					<div>{error}</div>
				</form>	
	</>)
}

export default Signin