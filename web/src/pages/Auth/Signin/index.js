import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import {
	Main,
	H2,
	Column,
	Container,
	ButtonAction,
	Input,
	LinkAction
} from '../../../components/StyledComponents'
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

	return (
	
		<Main height={'100vh'}>
			<Column margin={'auto'}>
				<Container width={'300px'}>
					<Column as="form" onSubmit={handleSignin}>
						<H2 margin={'0 0 20px 0'}>Entrar</H2>
						<Input name="username" placeholder="usuário" onChange={e => setUsername(e.target.value)}/>
						<Input name="password" type="password" placeholder="senha" onChange={e => setPassword(e.target.value)}/>
						<ButtonAction type="submit" width={'100%'}>entrar</ButtonAction>
						<Link to="/signup">
							<LinkAction>Não tem uma conta? Clique aqui!</LinkAction>
						</Link>
						<Alert>{error}</Alert>
					</Column>
				</Container>
			</Column>	
		</Main>

	)
}

export default Signin