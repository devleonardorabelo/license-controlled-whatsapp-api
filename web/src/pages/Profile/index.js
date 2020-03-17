import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import NavPanel from '../../components/NavPanel'

import {
    Row,
    Column,
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
    H5,
    P
  } from '../../components/StyledComponents'

function Profile(){

    const [ contacts, setContacts ] = useState()
    const [ customers, setCustomers] = useState([])
    

    useEffect(() => {

        async function loadContacts(){

            const response = await axios.get(`${process.env.REACT_APP_BACK_DOMAIN}/panel/contacts`, { headers: { Authorization: `Bearer ${localStorage.getItem('usertoken')}` } })
            setContacts(response.data.encContacts)
            setCustomers(response.data.customers)

        }

        loadContacts()

            
    }, [])

    return (
        <Row>
            <NavPanel />
            <Main>
                <Column>
                    
                </Column>
            </Main>
        </Row> 
    )
}

export default Profile