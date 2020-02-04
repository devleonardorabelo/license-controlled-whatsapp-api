import React from 'react'
import { Link } from 'react-router-dom'
function Panel() {
	return (<>
		<h1>My CPanel</h1>
		<p><Link to="/home">go Home</Link></p>
	</>)
}

export default Panel