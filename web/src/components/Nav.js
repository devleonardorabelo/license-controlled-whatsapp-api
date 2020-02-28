import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {

	const [ isActive, setIsActive ] = useState(false)

	const toggle = () => {
		setIsActive(!isActive)
	}

	return(
		<nav>
            <div className="nav-header m-1">
                <div className="logo-full">GerenciaZap</div>
                <button className="burger-button nmf" id="burger-button" onClick={ () => {toggle()} }></button> 
            </div>
            <div className={`nav px-1 ${isActive ? 'active' : ''}`}>
                <Link className="logo-icon" to="/"></Link>
                <Link className="nav-item nmf mb-1 message" to="/">
                    <span className="item">Home</span>
                </Link>
                <Link className="nav-item nmf mb-1 contact" to="/contacts">
                    <span className="item">Contacts</span>
                </Link>
                <Link className="nav-item nmf mb-1 report" to="/reports">
                    <span className="item">Reports</span>
                </Link>
            </div>            
        </nav>
	)
}

export default Nav