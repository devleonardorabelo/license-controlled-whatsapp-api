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
    H6,
    P,
    Avatar,
    ButtonAction,
    ButtonLink,
    Input,
    Alert,
    PB
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
      <Row background={'#f7faff'} minHeight={'100vh'}>
        <NavPanel />
        <Main>
          <Column background={'transparent'}>
            <Container padding={'0 10px 20px 0'}>
              <Link to='/panel'><ButtonLink background={'url(/img/panel/arrow-left.svg)'}/></Link>
            </Container>
            <Container padding={'10px 10px'}>
              <H6>MEU PERFIL</H6>
            </Container>
            <Row padding={'0 10px'}>
              <Box as='form' width={'50%'} margin={'0 10px 0 0'} onSubmit={handleUpdateData} isResponsive>
                <Avatar margin={'20px auto 40px auto'} />
                <Column>
                  <PB>Nome da empresa</PB>
                  <Input width={'100%'} placeholder='Nome da Empresa' onChange={e => setCompany(e.target.value)} defaultValue={data.company}/>
                  <PB>Whatsapp</PB>
                  <Input width={'100%'} placeholder='whatsapp' onChange={e => setWhatsapp(e.target.value)} defaultValue={data.whatsapp}/>
                  <Button type='submit'>Atualizar dados</Button>  
                </Column>  
              </Box>
              <Box as='form' width={'50%'} margin={'0 0 0 10px'} onSubmit={handleUpdatePassword} isResponsive>
                <Column>
                  <H6 margin={'0 0 35px 0'}>Trocar senha</H6>
                  <PB>Senha atual</PB>
                  <Input type='password' placeholder='senha atual' onChange={e => setCurrentPwd(e.target.value)}/>
                  <PB>Nova senha</PB>
                  <Input type='password' placeholder='nova senha' onChange={e => setNewPwd(e.target.value)}/>
                  <PB>Confirmar nova senha</PB>
                  <Input type='password' placeholder='confirmar senha' onChange={e => setconfirmPwd(e.target.value)}/>
                  <Button type="submit">Trocar senha</Button>  
                </Column>
                
              </Box>
            </Row>
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