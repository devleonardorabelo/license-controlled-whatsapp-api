import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import {
  Row,
  Nav,
  Container,
  NavResponsive,
  Logo,
  Burger,
  NavItem,
  NavLink,
  Logout,
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
  const [license, setLicense] = useState()

  useEffect(() => {

    async function loadMessages(){

      const response = await axios.get(`${process.env.REACT_APP_BACK_DOMAIN}/panel`, { headers: { Authorization: `Bearer ${localStorage.getItem('usertoken')}` } })
      setMessages(response.data.message)
      setStatus(response.data.status)
      setLicense(response.data.license)
      
    }
    
    loadMessages() 
    
  }, [])

  const handleDestroy = async (id) => {
    const response = await axios.delete(`${process.env.REACT_APP_BACK_DOMAIN}/panel/delete?id=${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('usertoken')}` } })
    setMessages(response.data.message)
  }

	return (
    <Row>
      <Nav>
        <NavResponsive>
          <Logo />
          <Burger />
        </NavResponsive>
        <NavItem>
          <Link to='/panel'><NavLink><span>Home</span></NavLink></Link>
          <Link to='/contacts'><NavLink><span>Perfil</span></NavLink></Link>
          <Link to='/panel'><NavLink><span>Contatos</span></NavLink></Link>
        </NavItem>
        <Logout><span>sair</span></Logout>
      </Nav>
      <Main>
        <Column>
          <Container padding={'0 10px'}>
            <Link to='/panel'><ButtonNmf /></Link>
          </Container>
          <Container padding={'40px 10px'}>
            <Row>
              <Avatar></Avatar>
              <Column padding={'0 20px'}>
                <H2 margin={'0 0 20px 0'}>Nome da Empresa</H2>
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
                {license ? <P>{message.message}</P> : <P>Comprar licença</P>}
                {license ? 
                  <ButtonNmf as="a" target="_blank" href={`https://api.whatsapp.com/send?phone=${message.customer.whatsapp}`}>></ButtonNmf>
                  :
                  <Link to="/signature"><ButtonNmf target="_blank">></ButtonNmf></Link>
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