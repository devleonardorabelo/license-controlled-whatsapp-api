import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { NavHeader, FullLogo, ResponsiveLogo, ButtonBurger, NavItem, ItemMessage, ItemContact, Item } from './StyledComponents'


function Nav() {

	const [ isActive, setIsActive ] = useState(false)

    const ResponsiveNav = styled.div`
        padding: 20px;
        @media (max-width: 860px) {
            padding: 0 20px !important;
            max-height: 0px;
            overflow-y: hidden;
        }

        -webkit-animation: ${isActive ? 'toggleMenu 1.3s forwards' : ''};
        animation: ${isActive ? 'toggleMenu 1.3s forwards' : ''};

        @-webkit-keyframes toggleMenu {
            0% {
                max-height: 0px;
            }
            100% {
                max-height: 100vh;
            }
        }
        
        @keyframes toggleMenu {
            0% {
                max-height: 0px;
            }
            100% {
                max-height: 100vh;
            }
        }
    `;

	const toggle = () => {
		setIsActive(!isActive)
	}

	return(
		<nav>
            <NavHeader>
                <ResponsiveLogo></ResponsiveLogo>
                <ButtonBurger onClick={ () => {toggle()} }></ButtonBurger> 
            </NavHeader>
            <ResponsiveNav>
                <Link to="/"><FullLogo></FullLogo></Link>
                <Link to="/panel">
                    <ItemMessage>
                        <Item>Mensagens</Item> 
                    </ItemMessage>
                </Link>
                <Link to="/contacts">
                    <ItemContact>
                        <Item>Contatos</Item> 
                    </ItemContact>
                </Link>
                <Link to="/">
                    <NavItem>
                        <Item>Suporte</Item> 
                    </NavItem>
                </Link>
            </ResponsiveNav>            
        </nav>
	)
}

export default Nav