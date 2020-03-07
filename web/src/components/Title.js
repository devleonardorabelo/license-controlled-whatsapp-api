import React from 'react'
import { Container1, Title2, Title1, Column } from './StyledComponents'
function Title(props){
    return (
        <Container1>
            <Column>
                <Title2>{props.title1}</Title2>
                <Title1>{props.title2}</Title1>    
            </Column>
        </Container1>
    )
}

export default Title