import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
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


function Recover() {

  const [ password, setPassword ] = useState('')
  const [ confirm, setConfirm ] = useState('')
	const [ alert, setAlert ] = useState(false)
  const [ textAlert, setTextAlert ] = useState(null)
  const [ disabled, setDisabled ] = useState(false)
  const [ statusAlert, setStatusAlert ] = useState(false)

  let history = useHistory()

  let { key } = useParams()

  async function handleRecover(e) {
    e.preventDefault()
    
    setDisabled(true)

    const response = await axios.post(`${process.env.REACT_APP_BACK_DOMAIN}/auth/recover/new`,{
      key,
      password,
      confirm
    })
    
    if(response.data.success) setStatusAlert(true)

    if(response.data){
      setAlert(true)
      setTextAlert(response.data.alert)
      setTimeout(() => {
        setAlert(false)
        setTextAlert(null)
        setStatusAlert(false)
        if(response.data.success == true) return history.push('/signin')
        setDisabled(false)
      }, 2000)
    }

  }

  return(
    <Main height={'100vh'}>
			<Column margin={'auto'}>
				<Container width={'300px'}>
					<Column as="form" onSubmit={handleRecover}>
						<H2 margin={'0 0 20px 0'}>Nova senha</H2>
						<Input type='password' placeholder="nova senha" onChange={e => setPassword(e.target.value)}/>
            <Input type='password' placeholder="confirmar senha" onChange={e => setConfirm(e.target.value)}/>
						<ButtonAction type="submit" width={'100%'} disabled={disabled}>enviar</ButtonAction>
					</Column>	
				</Container>
			</Column>	
			<Alert alert={alert} statusAlert={statusAlert}>{textAlert}</Alert>
		</Main>
  )

}

export default Recover