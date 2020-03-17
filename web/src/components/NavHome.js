import React, { useState } from 'react'

function NavHome() {

	const [ isActive, setIsActive ] = useState(false)

	const toggle = () => {
		setIsActive(!isActive)
	}

	return(
		<nav>
			<button className="toggle-nav" onClick={ () => {toggle()} }><img src="/img/open-menu.svg" alt="Abrir Menu" title="Abrir Menu" /></button>
			<img src="/img/logo.png" alt="GerenciaZap" title="GerenciaZap" className="logo" />
			<ul className={`${isActive ? 'active' : ''}`}>
				<li><a href="#functionalities">Funcionalidades</a></li>
				<li><a href="#subscription">Assinatura</a></li>
				<li><a href="#how-to">Integração</a></li>
				<li><a href="#support">Suporte</a></li>
				<li><a href="/signin">Login</a></li>
				<li><a href="/subscription" className="btn-testar">Ganhe R$15,90 para Testar</a></li>
			</ul>
		</nav>
	)
}

export default NavHome