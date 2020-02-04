import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
	return (<>
		<h1>Home</h1>
		<p><Link to="/auth">go Auth</Link></p>
	</>)
}

export default Home