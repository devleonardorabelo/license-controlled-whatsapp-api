import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Info from '../../components/Info'

import './styles.css'

import Message from '../../components/Message'
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


	return (<>
    <div className="back-left"></div>
    <nav className="container">
      <div className="nav-container">
        <div className="logo"></div>
        <ul className="menu">
          <li><a className="active" href="">Dashboard</a></li>
          <li><a href="">Relatórios</a></li>
          <li><a href="">Instalação</a></li>
        </ul>
        <div className="config">
          <a className="gear" href=""></a>
          <a className="user" href=""></a>
        </div>      
      </div>
    </nav>
    <section className="container">
      <div className="section-container">
        <Info newMessages={status.news} today={status.today} week={status.week} month={status.month}/>
        <div className="content">
          <div className="content-container">
            <h2>Mensagens</h2>
              {messages.map(message => (
                 <Message key={message._id} customer={message.customer.name} message={message.message} />
              ))}
          </div>
        </div>    
      </div>
    </section>
  </>)
}

export default Panel