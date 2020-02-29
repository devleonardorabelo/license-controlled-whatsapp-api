import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from '../../components/Nav'
import Header from '../../components/Header'
import Message from '../../components/Message'
import Title from '../../components/Title'

import { Row, RowToColumn, Main, Container2 } from '../../components/StyledComponents'

function Panel() {

  const [messages, setMessages] = useState([])
  const [status, setStatus] = useState([])  
  useEffect(() => {

    async function loadMessages(){

      const response = await axios.get('http://192.168.25.139:21068/panel', { headers: { Authorization: `Bearer ${localStorage.getItem('usertoken')}` } })
      setMessages(response.data.message)
      setStatus(response.data.status)

    }
    
    loadMessages() 
    
  }, [])


	return (

    <RowToColumn>
        <Nav />
        <Main>
            <Header />
            <Title />
            <RowToColumn>
              {messages.map(message => (
                <Container2 key={message._id}>
                    <Message customer={message.customer.name} message={message.message} />
                </Container2>
              ))}
            </RowToColumn>
        </Main>    
    </RowToColumn>


  )
}

export default Panel