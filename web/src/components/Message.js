import React from 'react'
import { Link } from 'react-router-dom'

function Messages(props) {
	return(
		
		<div class="d-row box nmf">
			<div>
				<div class="nmf new-icon m-1"></div>
			</div>
			<div class="grow-1 px-1">
				<h3 class="mt-1">{props.customer}</h3>
				<p>{props.message}</p>
				<div class="d-row align-end my-1">
					<Link to='/' class="nmf ml-1"></Link>
					<Link to='/' class="nmf ml-1"></Link>
				</div>
			</div>
		</div>
		
	)
}

export default Messages