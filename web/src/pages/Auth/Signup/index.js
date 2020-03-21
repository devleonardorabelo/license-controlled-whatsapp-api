import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'

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


function Signup() {
	
    const [username, setUsername]= useState('')
	const [whatsapp, setWhatsapp]= useState('')
	const [company, setCompany]= useState('')
    const [email, setEmail]= useState('')
	const [password, setPassword]= useState('')
	const [alert, setAlert]= useState(false)
	const [textAlert, setTextAlert]= useState([])

	let history = useHistory()

	async function handleSignin(e){
		e.preventDefault()
		
		const response = await axios.post(`${process.env.REACT_APP_BACK_DOMAIN}/auth/signup`, {
			username,
			company,
            password,
            whatsapp,
            email
		})

		if(response.data.error){
			setAlert(true)
			setTextAlert(response.data.error)
			return setTimeout(() => {
				setAlert(false)
				setTextAlert([null])
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
						<H2 margin={'0 0 20px 0'}>Criar uma conta</H2>
						<Input name="username" placeholder="username" onChange={e => setUsername(e.target.value)} />
						<Input name="company" placeholder="Nome da Empresa" onChange={e => setCompany(e.target.value)} />
						<Input name="whatsapp" placeholder="whatsapp" onChange={e => setWhatsapp(e.target.value)} />
						<Input type="email" name="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
						<Input type="password" name="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
						<ButtonAction type="submit" width={'100%'}>entrar</ButtonAction>
						<Link to="/signin">
							<LinkAction>Já tem uma conta? Entre aqui!</LinkAction>
						</Link>
						<Alert alert={alert}>
							{textAlert.map(eachAlert => (
								<div key={Math.random()}>{eachAlert}</div>
							))}
						</Alert>
					</Column>
				</Container>
			</Column>	
		</Main>
		
	)
}

export default Signup