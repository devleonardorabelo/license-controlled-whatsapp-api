import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Nav from '../../components/Nav'
import Header from '../../components/Header'
import Title from '../../components/Title'

import { BodyRow, Main, Container2, Row, IconNmf, Grow1, Box, Title3, Text, RowEnd, ButtonAction, RowToColumnWrap, HiddenText } from '../../components/StyledComponents'

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

    <BodyRow>
        <Nav />
        <Main>
            <Header />
            <Title title1="Minhas" title2="Mensagens"/>
            <RowToColumnWrap>
              {messages.map(message => (
                <Container2 key={message._id}>
                  <Box>
                    <Row>
                      <div>
                        <IconNmf></IconNmf>
                      </div>
                      <Grow1>
                        <Title3>{message.customer.name}</Title3>
                        {license ? <Text>{message.message}</Text> : <HiddenText />}
                        <RowEnd>
                          <ButtonAction onClick={() => {handleDestroy(message._id)}}>x</ButtonAction>
                          {license ? 
                            <ButtonAction as="a" target="_blank" href={`https://api.whatsapp.com/send?phone=${message.customer.whatsapp}`}>></ButtonAction>
                            :
                            <Link to="/signature"><ButtonAction target="_blank">></ButtonAction></Link>
                          }
                        </RowEnd>
                      </Grow1>
                    </Row>  
                  </Box>
                  
                </Container2>
              ))}
            </RowToColumnWrap>
        </Main>    
    </BodyRow>


  )
}

export default Panel