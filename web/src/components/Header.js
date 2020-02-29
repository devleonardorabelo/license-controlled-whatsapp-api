import React from 'react'
import styled from 'styled-components'

import { Row, Container1, SearchBox, InputText, ButtonReset, ButtonSearch } from './StyledComponents'

function Header(props){
    return(
        <Row>
            <Container1>
                <SearchBox action="teste" method="post">
                    <InputText type="text" placeholder="Busque por algo..." />
                    <ButtonReset type="reset"></ButtonReset>
                    <ButtonSearch type="submit"></ButtonSearch>
                </SearchBox>
            </Container1>
        </Row>        
    )
}

export default Header