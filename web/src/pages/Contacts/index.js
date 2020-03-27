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
    P,
    PB,
    Column,
    ButtonLink,
    H6
  } from '../../components/StyledComponents'

function Contacts(){

    const [ contacts, setContacts ] = useState()
    const [ customers, setCustomers] = useState([])
    const filename = `contacts${Date.now()}.csv`

    useEffect(() => {

        async function loadContacts(){

            const response = await axios.get(`${process.env.REACT_APP_BACK_DOMAIN}/panel/contacts`, { headers: { Authorization: `Bearer ${localStorage.getItem('usertoken')}` } })
            
            setContacts(response.data.encContacts)
            setCustomers(response.data.customers)
        }

        loadContacts()

            
    }, [])

    return (    
        <Row background={'#f7faff'} minHeight={'100vh'}>
          <NavPanel />
          <Main>
            <Column background={'transparent'}>
              <Container padding={'0 10px 20px 0'}>
                <Link to='/panel'><ButtonLink background={'url(/img/panel/arrow-left.svg)'}/></Link>
              </Container>
              <Container padding={'10px 10px'}>
                <H6 margin={'0 0 10px 0'}>CONTATOS</H6>
                {customers.map(customer => (
                    <Box key={customer._id} padding={'10px 20px'} margin={'0 0 1rem 0'}>
                        <PB margin={'0 0 -10px 0'}>{customer.name}</PB>
                        <P>{customer.whatsapp}</P>
                    </Box>
                ))}
              </Container>
              <Container padding={'0 10px'}>
                  <Button as="a" href={contacts} download={filename} onClick={() => {window.open('https://contacts.google.com/')}}>Importar</Button>
              </Container>
            </Column>
          </Main>
        </Row>
    )
}

export default Contacts