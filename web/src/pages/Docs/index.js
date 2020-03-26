import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import useClipboard from "react-use-clipboard"
import axios from 'axios'


import NavPanel from '../../components/NavPanel'
import { Row, Main, Column, Container, H6, ButtonLink, Box, Pre, CenterY, P } from '../../components/StyledComponents'

function Docs() {

  const [ licenseKey, setLicenseKey ] = useState()
  const [ company, setCompany ] = useState()
  let code = `
    <div id="gerenciazap" license-key="${licenseKey}" company="${company}">
      <script src="${process.env.REACT_APP_CLIENT_DOMAIN}/scripts/theme1.js"></script>
    </div>
  `;
  const [ isCopied, setIsCopied ] = useClipboard(code)

  useEffect(() => {

    async function LoadData() {

      const response = await axios.get(`${process.env.REACT_APP_BACK_DOMAIN}/panel/docs`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('usertoken')}`
        }
      }) 
      setLicenseKey(response.data.whatsappKey)
      setCompany(response.data.company)
    }

    LoadData()

  } , [])


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
            <P>Teste</P>
            <Box margin={'0'}>
              <Row>
                <Pre onClick={setIsCopied}>
                  &lt;div id="gerenciazap" license-key="{licenseKey}" company="{company}"&gt;{'\n'}
                    &nbsp;&lt;script src="{process.env.REACT_APP_CLIENT_DOMAIN}/scripts/theme1.js">&lt;/script&gt;{'\n'}
                  &lt;/div&gt;
                </Pre>
                <CenterY onClick={setIsCopied} inverted={isCopied}>
                  {isCopied ? 'Copiado!' : 'Copiar'}
                </CenterY>
              </Row>

            </Box>
          </Container>
        </Column>
      </Main>
    </Row>
  )
}

export default Docs

