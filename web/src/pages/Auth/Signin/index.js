import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import {
	Main,
	H2,
	Column,
	Container,
	ButtonAction,
	Input,
	LinkAction,
	Alert
} from '../../../components/StyledComponents'

import axios from 'axios'

function Signin() {
	
	const [username, setUsername]= useState('')
	const [password, setPassword]= useState('')
	const [alert, setAlert] = useState(false)
	const [textAlert, setTextAlert]= useState(null)

	let history = useHistory()

	async function handleSignin(e){
		e.preventDefault()

		const response = await axios.post(`${process.env.REACT_APP_BACK_DOMAIN}/auth/signin`, {
			username,
			password
		})
	
		if(response.data.error){
			setAlert(true)
			setTextAlert(response.data.error)
			return setTimeout(() => {
				setAlert(false)
				setTextAlert(null)
			}, 3000)
		}
		
		localStorage.setItem('usertoken', response.data)

		history.push('/panel')

		return

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
					</Column>	
				</Container>
			</Column>	
			<Alert alert={alert}>{textAlert}</Alert>
		</Main>

	)
}

export default Signin