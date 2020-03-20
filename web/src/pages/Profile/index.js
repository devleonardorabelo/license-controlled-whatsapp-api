import React, { useState, useEffect, useInput } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
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
    Input,
    Alert
  } from '../../components/StyledComponents'

function Profile(){

    const [ data, setData] = useState([])
    const [ company, setCompany ] = useState('')
    const [ whatsapp, setWhatsapp ] = useState('')
    const [ currentPwd, setCurrentPwd ] = useState('')
    const [ newPwd, setNewPwd ] = useState('')
    const [ confirmNewPwd, setConfirmNewPwd ] = useState('')
    const [ alert, setAlert ] = useState(false)
    const [ textAlert, setTextAlert ] = useState([])

    useEffect(() => {

      async function loadData(){

          const response = await fetch(`${process.env.REACT_APP_BACK_DOMAIN}/panel/profile`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('usertoken')}`
            },
            mode: 'cors',
          })

          let data = await response.json()

          setData(data)
          setCompany(data.company)
          setWhatsapp(data.whatsapp)

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
        body: JSON.stringify({company, whatsapp})
      })
      
      let data = await response.json()

      if(data.alert){
        setAlert(true)
        setTextAlert(data.alert)
  
        return setTimeout(() => {
          setAlert(false)
          setTextAlert([])
        }, 3000)
      }


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
                <Column as='form' onSubmit={handleUpdateData} >   
                  <H5>Meus dados</H5>
                  <Row>
                    <Input placeholder='Nome da Empresa' onChange={e => setCompany(e.target.value)} defaultValue={data.company}/>
                  </Row>
                  <Row>
                    <Input placeholder='whatsapp' onChange={e => setWhatsapp(e.target.value)} defaultValue={data.whatsapp}/>
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
            <Alert alert={alert}>
              {textAlert.map(eachAlert => (
                <div key={Math.random()}>{eachAlert}</div>
              ))}
            </Alert>
          </Column>
        </Main>
      </Row>
    )
}

export default Profile