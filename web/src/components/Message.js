import React from 'react'

function Messages(props) {
	return(
		<div className="messages" key={props.key}>
			<div className="content">
				<div className="icon">
					<img src={props.image} alt="" />
				</div>
				<div className="text">
					<h4 className="title-message">{props.customer}</h4>
					<p className="grey-text">{props.message}</p>	
				</div>	
			</div>
			<div className="datetime">
				<p>{props.date}</p>
				<p>{props.hour}</p>
				<p>{props.whatsapp}</p>
			</div>
		</div>
	)
}

export default Messages