import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import NavPanel from '../../components/NavPanel'

import {
  Row,
  Container,
  Main,
  Box,
  Button,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  H7,
  P,
  PB,
  Column,
  Avatar,
  ButtonAction,
  ButtonLink,
  Info
} from '../../components/StyledComponents'

function Panel() {

  const [messages, setMessages] = useState([])
  const [status, setStatus] = useState([])  
  const [user, setUser] = useState([])

  useEffect(() => {

    async function loadMessages(){

      const response = await axios.get(`${process.env.REACT_APP_BACK_DOMAIN}/panel`, { headers: { Authorization: `Bearer ${localStorage.getItem('usertoken')}` } })
      setMessages(response.data.message)
      setStatus(response.data.status)
      setUser(response.data.user)
      
    }
    
    loadMessages() 
    
  }, [])

  const handleDestroy = async (id) => {
    const response = await axios.delete(`${process.env.REACT_APP_BACK_DOMAIN}/panel/delete?id=${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('usertoken')}` } })
    setMessages(response.data.message)
  }
  console.log(messages)
	return (
    <Row background={'#f7faff'} minHeight={'100vh'}>
      <NavPanel />
      <Main>
        <Column>
          <Container padding={'0 10px 20px 0'}>
            <Link to='/panel'><ButtonLink background={'url(/img/panel/arrow-left.svg)'}/></Link>
          </Container>
          <Box padding={'40px 20px'}>
            <Row>
              <Avatar></Avatar>
              <Column padding={'10px 20px'}>
                <H5 margin={'0 0 8px 0'}>{user.company}</H5>
                <Row>
                  <Button background={'url(/img/panel/user.svg)'}>Meu perfil</Button>
                </Row>
              </Column>
            </Row>  
          </Box>
          <Container margin={'20px 0 20px 0'}>
            <H6 margin={'0 10px'}>MENSAGENS</H6>
            <Row wrap={'wrap'}>
            {messages.map(message => (
              <Box key={message._id} width={'50%'} isResponsive>
                <Row content={'space-between'}>
                  <div>
                    <H7 margin={'0 0 -10px'}>{message.customer.name}</H7>
                    <Info>{message.customer.whatsapp}</Info>
                    {user.active ? <P fontStyle={'italic'}>"{message.message}"</P> : <P>Comprar licença</P>}  
                  </div>
                  <div>
                    {user.active ? 
                      <ButtonAction as="a" margin={'8px 0 0 0'} target="_blank" background={'#4eb792 url(/img/panel/send.svg)'} href={`https://api.whatsapp.com/send?phone=${message.customer.whatsapp}`} />
                      :
                      <Link to="/subcription"><Button target="_blank">></Button></Link>
                    }    
                  </div>
                </Row> 
              </Box>
            ))}
            </Row>
          </Container>
          <Container>
            <H6 margin={'0 10px'}>RELATÓRIOS</H6>
            <Row>
              <Box flexGrow={'1'}>
                <Row>
                  <Box>
                    <P margin={'0 0 -16px 0'}>Hoje</P>
                    <H3>{status.today}</H3>
                  </Box>
                  <Box>
                    <P margin={'0 0 -16px 0'}>Esta semana</P>
                    <H3>{status.week}</H3>
                  </Box>
                  <Box>
                    <P margin={'0 0 -16px 0'}>Este mês</P>
                    <H3>{status.month}</H3>
                  </Box>
                  <Box flexGrow={'1'}>
                    <P margin={'0 0 -16px 0'}>Clientes registrados</P>
                    <H3>{status.month}</H3>
                  </Box>
                </Row>
              </Box>
            </Row>
          </Container>
        </Column>
      </Main>
    </Row>




        
  )
}

export default Panel