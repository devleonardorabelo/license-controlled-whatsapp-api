import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Main, Container } from '../../components/StyledComponents';

const Subscription = () => {

  const history = useHistory()

  useEffect(() => {
    async function loadSubscription() {
      const response = await axios.get(`${process.env.REACT_APP_BACK_DOMAIN}/payment`, { headers: { Authorization: `Bearer ${localStorage.getItem('usertoken')}` } })
      if(response.data.active === true) history.push('/panel')
    }
    loadSubscription()
  },[])

  async function handleSubscribe(e) {
    e.preventDefault()
    const response = await axios.post('https://sandbox.moip.com.br/assinaturas/v1/subscriptions?new_customer=true',{
      code: "32ad24",
      payment_method: "CREDIT_CARD",
      plan: {
        name: "Plano Especial",
        code: "plan101"
      },
      customer: {
        code: "321321",
        fullname: "Nome Sobrenome",
        email: "nome@exemplo.com.br",
        cpf: "22222222222",
        phone_number: "934343434",
        phone_area_code: "11",
        birthdate_day: "26",
        birthdate_month: "04",
        birthdate_year: "1986",
        address: {
          street: "Rua nome da Rua",
          number: "170",
          complement: "Casa",
          district: "Bairro",
          city: "São Paulo",
          state: "SP",
          country: "BRA",
          zipcode: "00000000"
        },
        billing_info: {
          credit_card: {
            holder_name: "Nome Completo",
            number: "4111111111111111",
            expiration_month: "04",
            expiration_year: "25"
          }
        }
      }
    },{
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic OVlTWUg5SUFQUE5DQjJRTlhWOUUzUE1ERzROVDdUT1M6WkpGTVBaTk5RSkM4TUZURlE5WFRKQkwwMkIyWUhRWFc3VFNJV0g3Qg==', 
      }
    })

    await axios.post(`${process.env.REACT_APP_BACK_DOMAIN}/payment`,{}, { headers: { Authorization: `Bearer ${localStorage.getItem('usertoken')}` } })
    history.push('/panel')
  }

  return (
    <Main>
      <Container>
        <form onSubmit={handleSubscribe}>
          <button type='submit'>Enviar</button>
        </form>
      </Container>
    </Main>
  );
};

export default Subscription
