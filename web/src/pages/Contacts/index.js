import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Nav from '../../components/Nav'
import Header from '../../components/Header'
import Title from '../../components/Title'
import { BodyRow, Main, RowEnd, Container1, ButtonAction, Column, RowNmf } from '../../components/StyledComponents'

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
        <BodyRow>
            <Nav />
            <Main>
                <Header />
                <Title title1="Meus" title2="Contatos" />             
                      
                <Column>
                    {customers.map(customer => (
                        <RowNmf key={customer._id}>
                            <p>{customer.name}</p>
                            <p>{customer.whatsapp}</p>
                        </RowNmf>
                    ))}
                </Column>
                <Column>
                    <RowEnd>
                        <ButtonAction as="a" href={contacts} download={filename} onClick={() => {window.open('https://contacts.google.com/')}}>^</ButtonAction>     
                    </RowEnd>
                </Column>
            </Main>
            
        </BodyRow>
    )
}

export default Contacts