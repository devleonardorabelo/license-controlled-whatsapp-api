import React from 'react'
import { Link } from 'react-router-dom'

import { RowEnd, RowNmf, IconNmf, Grow1, Title3, Text, ButtonAction } from './StyledComponents'

function Messages(props) {
	return(
		<RowNmf>
			<div>
				<IconNmf></IconNmf>
			</div>
			<Grow1>
				<Title3>{props.customer}</Title3>
				<Text>{props.message}</Text>
				<RowEnd>
					<Link to='/'><ButtonAction></ButtonAction></Link>
					<Link to='/'><ButtonAction></ButtonAction></Link>
				</RowEnd>
			</Grow1>
		</RowNmf>
	)
}

export default Messages