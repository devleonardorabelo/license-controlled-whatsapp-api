import React, { useState, useEffect, useInput } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
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
    Button,
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
    const [ confirmPwd, setconfirmPwd ] = useState('')
    const [ alert, setAlert ] = useState(false)
    const [ textAlert, setTextAlert ] = useState([])
    const [ statusAlert, setStatusAlert ] = useState(false)

    useEffect(() => {

      async function loadData(){

          const response = await axios.get(`${process.env.REACT_APP_BACK_DOMAIN}/panel/profile`,{
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${localStorage.getItem('usertoken')}`
            },
          })

          setData(response.data)
          setCompany(response.data.company)
          setWhatsapp(response.data.whatsapp)

      }

      loadData()
          
    }, [])

    async function handleUpdateData(e) {
      e.preventDefault()

      const response = await axios.post(`${process.env.REACT_APP_BACK_DOMAIN}/panel/update/data`,{
        company,
        whatsapp
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('usertoken')}`
        },
      })

      if(response.data.success) setStatusAlert(true)

      if(response.data.alert){
        setAlert(true)
        setTextAlert(response.data.alert)
        setTimeout(() => {
          setAlert(false)
          setTextAlert([])
          setStatusAlert(false)
        }, 3000)
      }


    }

    async function handleUpdatePassword(e) {
      e.preventDefault()

      const response = await axios.post(`${process.env.REACT_APP_BACK_DOMAIN}/panel/update/password`,{
        currentPwd,
        newPwd,
        confirmPwd
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('usertoken')}`
        },
      })

      if(response.data.success) setStatusAlert(true)
      
      if(response.data.alert){
        setAlert(true)
        setTextAlert(response.data.alert)
        setTimeout(() => {
          setAlert(false)
          setTextAlert([])
          setStatusAlert(false)
        }, 3000)
      }



    }

    return (
      <Row>
        <NavPanel />
        <Main>
          <Column>
            <Container padding={'0 10px'}>
            <Link to='/panel'><Button /></Link>
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
                    <Input type='password' placeholder='senha atual' onChange={e => setCurrentPwd(e.target.value)}/>
                  </Row>
                  <Row>
                    <Input type='password' placeholder='nova senha' onChange={e => setNewPwd(e.target.value)}/>
                    <Input type='password' placeholder='confirmar senha' onChange={e => setconfirmPwd(e.target.value)}/>
                  </Row>
                  <Row>
                    <ButtonAction type="submit">Trocar senha</ButtonAction>
                  </Row>
              
                </Column>
              </Column>
            </Container>
            <Alert alert={alert} statusAlert={statusAlert}>
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