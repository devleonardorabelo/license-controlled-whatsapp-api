import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import {
  Row,
	Main,
	H4,
	Column,
	Container,
	Button,
	Input,
	LinkAction,
	Alert
} from '../../../components/StyledComponents'

import axios from 'axios'

function Signin() {
	
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [alert, setAlert] = useState(false)
  const [textAlert, setTextAlert] = useState(null)

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
    <Main height={'100vh'} padding={'0'} background={'#44bba4'} isResponsive>
      <Alert alert={alert}>{textAlert}</Alert>
      <Row>
        <Column width={'30%'}>
          a
        </Column>
        <Column width={'70%'} minHeight={'100vh'} background={'#fff'} isResponsive>
          <Container width={'300px'} margin={'auto'}>
            <Column as="form" onSubmit={handleSignin}>
              <H4 margin={'0 0 20px 0'}>Entrar</H4>
              <Input name="username" placeholder="usuário" onChange={e => setUsername(e.target.value)}/>
              <Input name="password" type="password" placeholder="senha" onChange={e => setPassword(e.target.value)}/>
              <Button type="submit" width={'100%'}>entrar</Button>
              <Link to="/recover">
                <LinkAction>Esqueci minha senha</LinkAction>
              </Link>
              <Link to="/signup">
                <LinkAction>Não tem uma conta? Clique aqui!</LinkAction>
              </Link>
            </Column>	
          </Container>
        </Column>  
      </Row>
    </Main>	
		

	)
}

export default Signin