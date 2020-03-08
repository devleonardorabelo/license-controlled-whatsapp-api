import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import axios from 'axios'

import { Form, Title1, Body, InputTextNmf, ButtonSignNmf, ButtonSign, ColumnCenter, Container1} from '../../../components/StyledComponents'
import styled from 'styled-components'

function Signup() {
	
    const [username, setUsername]= useState('')
    const [whatsapp, setWhatsapp]= useState('')
    const [email, setEmail]= useState('')
	const [password, setPassword]= useState('')
	const [isError, setIsError]= useState(false)
	const [errors, setErrors]= useState([])

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

	let history = useHistory()

	async function handleSignin(e){
		e.preventDefault()
		
		const response = await axios.post(`${process.env.REACT_APP_BACK_DOMAIN}/auth/signup`, {
			username,
            password,
            whatsapp,
            email
		})

		if(response.data.error){
			setIsError(true)
			setErrors(response.data.error)
			return setTimeout(() => {
				setIsError(false)
				setErrors([null])
			}, 3000)
		}
		
		localStorage.setItem('usertoken', response.data)
		return history.push('/panel')

	}

	return (<>
		<Body>
			<ColumnCenter>
				<Form as="form" onSubmit={handleSignin}>
					<Title1>Criar conta</Title1>
					<InputTextNmf name="username" placeholder="username" onChange={e => setUsername(e.target.value)} />
					<InputTextNmf name="whatsapp" placeholder="whatsapp" onChange={e => setWhatsapp(e.target.value)} />
					<InputTextNmf type="email" name="email" placeholder="email" onChange={e => setEmail(e.target.value)} />
					<InputTextNmf type="password" name="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
					<Container1>
						<ButtonSignNmf type="submit" >Cadastrar</ButtonSignNmf>
						<Link to="/signin">
							<ButtonSign as="div">Já tem uma conta? Entre aqui!</ButtonSign>
						</Link>
					</Container1>
				</Form>
			</ColumnCenter>
		</Body>
		
		<Alert>
			{errors.map(error => (
				<div key={Math.random()}>{error}</div>
			))}
		</Alert>
		
	</>)
}

export default Signup