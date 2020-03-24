import React from 'react'
import { Link } from 'react-router-dom'
import NavPanel from '../../components/NavPanel'
import { Row, Main, Column, Container, H6, ButtonLink, Box } from '../../components/StyledComponents'

function Docs() {
	return (
    <Row background={'#f7faff'} minHeight={'100vh'}>
      <NavPanel />
      <Main>
        <Column background={'transparent'}>
          <Container padding={'0 10px 20px 0'}>
            <Link to='/panel'><ButtonLink background={'url(/img/panel/arrow-left.svg)'}/></Link>
          </Container>
          <Container padding={'10px 10px'}>
            <H6 margin={'0 0 10px 0'}>DOCUMENTAÇÃO</H6>
            <Box margin={'0'}>d</Box>
          </Container>
        </Column>
      </Main>
    </Row>
  )
}

export default Docs