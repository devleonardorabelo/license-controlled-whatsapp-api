import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from '../../components/Nav'
import Header from '../../components/Header'
import Message from '../../components/Message'
import Title from '../../components/Title'

import '../../structure.css'
import '../../styles.css'


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

    <div className="d-row d-row-to-column">
        <Nav />
        <main className="d-column grow-1">
            <Header />
            <Title />
            <section className="d-row d-row-to-column">
              {messages.map(message => (
                <div className="container-2 p-1" key={message._id}>
                    <Message customer={message.customer.name} message={message.message} />
                </div>
              ))}
            </section>
        </main>    
    </div>


  )
}

export default Panel