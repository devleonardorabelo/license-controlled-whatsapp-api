import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import API from '../../configs/axios'

import NavPanel from '../../components/NavPanel'

import {
  Row,
  Container,
  Main,
  Box,
  ButtonNmf,
  H2,
  H3,
  P,
  Column,
  Avatar,
  ButtonAction
} from '../../components/StyledComponents'

function Panel() {

  const [messages, setMessages] = useState([])
  const [status, setStatus] = useState([])  
  const [user, setUser] = useState([])

  useEffect(() => {

    async function loadMessages(){

      const response = await API.get(`/panel`)
      setMessages(response.data.message)
      setStatus(response.data.status)
      setUser(response.data.user)
      
    }
    
    loadMessages() 
    
  }, [])

  const handleDestroy = async (id) => {
    const response = await API.delete(`/panel/delete?id=${id}`)
    setMessages(response.data.message)
  }

	return (
    <Row>
      <NavPanel />
      <Main>
        <Column>
          <Container padding={'0 10px'}>
            <Link to='/panel'><ButtonNmf /></Link>
          </Container>
          <Container padding={'40px 10px'}>
            <Row>
              <Avatar></Avatar>
              <Column padding={'0 20px'}>
                <H2 margin={'0 0 20px 0'}>{user.company}</H2>
                <ButtonAction>Meu Perfil</ButtonAction>
              </Column>
            </Row>
          </Container>
          <Container padding={'0 10px'}>
            <H2>Mensagens</H2>
          </Container>
          <Container>
            {messages.map(message => (
              <Box key={message._id}>
                <H3>{message.customer.name}</H3>
                {user.active ? <P>{message.message}</P> : <P>Comprar licença</P>}
                {user.active ? 
                  <ButtonNmf as="a" target="_blank" href={`https://api.whatsapp.com/send?phone=${message.customer.whatsapp}`}>></ButtonNmf>
                  :
                  <Link to="/subcription"><ButtonNmf target="_blank">></ButtonNmf></Link>
                }
              </Box>
            ))}
          </Container>
        </Column>
      </Main>
    </Row>




        
  )
}

export default Panel