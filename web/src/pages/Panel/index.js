import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

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

        <div>
            <h1 title1="Minhas" title2="Mensagens"/>
            <div>
              {messages.map(message => (
                <div key={message._id}>
                  <div>
                    <div>
                      <div>
                        <div></div>
                      </div>
                      <div>
                        <h3>{message.customer.name}</h3>
                        {license ? <div>{message.message}</div> : <div>Comprar licença</div>}
                        <div>
                          <button onClick={() => {handleDestroy(message._id)}}>x</button>
                          {license ? 
                            <button as="a" target="_blank" href={`https://api.whatsapp.com/send?phone=${message.customer.whatsapp}`}>></button>
                            :
                            <Link to="/signature"><button target="_blank">></button></Link>
                          }
                        </div>
                      </div>
                    </div>  
                  </div>
                  
                </div>
              ))}
            </div>
        </div>    

  )
}

export default Panel