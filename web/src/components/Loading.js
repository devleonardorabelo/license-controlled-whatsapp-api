import React from 'react'
import { Column, Container, IconLoading } from './StyledComponents'

function Loading() {
	return(
		<Column width={'100%'} minHeight={'100vh'} background={'#f7faff'}>
			<Container width={'100%'} margin={'auto'}>
				<Container width={'10px'} margin={'auto'}>
					<IconLoading />
				</Container>
			</Container>
		</Column>
	)
}

export default Loading