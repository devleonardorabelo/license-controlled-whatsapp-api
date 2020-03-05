import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Form, Title1, Body, InputTextNmf, ButtonSignNmf, ButtonSign, ColumnCenter, Container1} from '../../../components/StyledComponents'
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
		<Body>
			<ColumnCenter>
				<Form as="form" onSubmit={handleSignin}>
					<Title1>Entrar</Title1>
					<InputTextNmf name="username" placeholder="usuário" onChange={e => setUsername(e.target.value)}/>
					<InputTextNmf name="password" type="password" placeholder="senha" onChange={e => setPassword(e.target.value)}/>
					<Container1>
						<ButtonSignNmf type="submit">entrar</ButtonSignNmf>
						<Link to="/signup">
							<ButtonSign as="div">Não tem uma conta? Clique aqui!</ButtonSign>
						</Link>
						
					</Container1>
					<Alert>{error}</Alert>
				</Form>
			</ColumnCenter>
		</Body>		
	</>)
}

export default Signin