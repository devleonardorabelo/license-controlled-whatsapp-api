import React from 'react'
import { Link } from 'react-router-dom'
import {
    Nav,
    NavResponsive,
    Logo,
    Burger,
    NavItem,
    NavLink,
    Logout,
} from './StyledComponents'

function NavPanel() {
    return(
    <Nav>
        <NavResponsive>
            <Logo />
            <Burger />
        </NavResponsive>
        <NavItem>
            <Link to='/panel'><NavLink><span>Home</span></NavLink></Link>
            <Link to='/profile'><NavLink><span>Perfil</span></NavLink></Link>
            <Link to='/contacts'><NavLink><span>Contatos</span></NavLink></Link>
        </NavItem>
        <Logout><span>sair</span></Logout>
    </Nav>
    )
}

export default NavPanel