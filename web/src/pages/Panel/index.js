import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Panel() {

  const [messages, setMessages] = useState([])  
  
  useEffect(() => {

    async function loadMessages(){

      const response = await axios.get('http://localhost:21068/panel', { headers: { Authorization: `Bearer ${localStorage.getItem('usertoken')}` } })
      setMessages(response.data)

    }
    loadMessages() 
    
  }, [])


	return (
    <div>
      <h1>Hello</h1>
      <h3>Minhas mensagens</h3>
      <ul>
        {messages.map(message => (
          <li key={message._id}>
            <h4>{message.customer.name+message.customer.whatsapp}</h4>
            <h5>{message.message}</h5>
            
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Panel