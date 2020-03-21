import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NavPanel from '../../components/NavPanel'

import {
    Row,
    Container,
    Main,
    Box,
    ButtonNmf,
    H2,
    H5,
    P
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
        <Row padding={'0px'}>
            <NavPanel />
            <Main>
                <Container padding={'0 0 40px 10px'}>
                    <Link to='/panel'><ButtonNmf /></Link>
                </Container>
                <Container padding={'0 10px'}>
                    <H2>Mensagens</H2>
                </Container>
                <Row>
                    {customers.map(customer => (
                        <Box key={customer._id}>
                            <H5>{customer.name}</H5>
                            <P>{customer.whatsapp}</P>
                        </Box>
                    ))}
                </Row>
                <Row padding={'10px'} content={'flex-end'}>
                    <ButtonNmf as="a" href={contacts} download={filename} onClick={() => {window.open('https://contacts.google.com/')}}>^</ButtonNmf>
                </Row>
            </Main>
        </Row>
    
    
    )
}

export default Contacts