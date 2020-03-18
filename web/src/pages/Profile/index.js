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
    P,
    Avatar,
    ButtonAction,
    Input
  } from '../../components/StyledComponents'

function Profile(){

    const [ data, setData] = useState([])
    const [ company, setCompany ] = useState('')
    const [ whatsapp, setWhatsapp ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ currentPwd, setCurrentPwd ] = useState('')
    const [ newPwd, setNewPwd ] = useState('')
    const [ confirmNewPwd, setConfirmNewPwd ] = useState('')
    

    useEffect(() => {

        async function loadData(){

            const response = await axios.get(`${process.env.REACT_APP_BACK_DOMAIN}/panel/profile`, { headers: { Authorization: `Bearer ${localStorage.getItem('usertoken')}` } })
            setData(response.data)

        }

        loadData()
        
            
    }, [])

    async function handleUpdateData(e) {
      e.preventDefault()

      const response = await fetch(`${process.env.REACT_APP_BACK_DOMAIN}/panel/update/data`, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('usertoken')}`
        },
        mode: 'cors',
        body: JSON.stringify({company, whatsapp, email})
      })
      
      let data = await response.json()

      console.log(data)
      

      

    }

    function handleUpdatePassword(e) {

    }

    return (
      <Row>
        <NavPanel />
        <Main>
          <Column>
            <Container padding={'0 10px'}>
            <Link to='/panel'><ButtonNmf /></Link>
            </Container>
            <Container padding={'40px 10px'}>
              <Column>
                <Avatar></Avatar>
                <Column as='form' onSubmit={handleUpdateData}>
                  <H5>Meus dados</H5>
                  <Row>
                    <Input placeholder='Nome da Empresa' onChange={e => setCompany(e.target.value)} defaultValue={data.company}/>
                  </Row>
                  <Row>
                    <Input placeholder='whatsapp' onChange={e => setWhatsapp(e.target.value)} defaultValue={data.whatsapp}/>
                    <Input placeholder='email' onChange={e => setEmail(e.target.value)} defaultValue={data.email}/>
                  </Row>
                  <Row>
                    <ButtonAction type='submit'>Atualizar dados</ButtonAction>
                  </Row>
                </Column>
                <Column as='form' onSubmit={handleUpdatePassword}>
                  <H5>Trocar senha</H5>
                  <Row>
                    <Input placeholder='senha atual' onChange={e => setCurrentPwd(e.target.value)}/>
                  </Row>
                  <Row>
                    <Input placeholder='nova senha' onChange={e => setNewPwd(e.target.value)}/>
                    <Input placeholder='confirmar senha' onChange={e => setConfirmNewPwd(e.target.value)}/>
                  </Row>
                  <Row>
                    <ButtonAction>Trocar senha</ButtonAction>
                  </Row>
              
                </Column>
              </Column>
            </Container>
          </Column>
        </Main>
      </Row>
    )
}

export default Profile