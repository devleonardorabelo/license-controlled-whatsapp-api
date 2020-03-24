import React, { useState, useEffect} from 'react'
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
    const [isActive, setIsActive] = useState(false)
    const activeMenu = () => {
        setIsActive(!isActive)
    }
    return(
    <Nav>
        <NavResponsive>
            <Logo />
            <Burger onClick={ () => { activeMenu() } }/>
        </NavResponsive>
        <NavItem isActive={isActive}>
            <Link to='/panel'><NavLink background={'url(/img/panel/home.svg)'}><span>Home</span></NavLink></Link>
            <Link to='/profile'><NavLink background={'url(/img/panel/user.svg)'}><span>Perfil</span></NavLink></Link>
            <Link to='/contacts'><NavLink background={'url(/img/panel/brackets.svg)'}><span>Contatos</span></NavLink></Link>
            <Link to='/docs'><NavLink background={'url(/img/panel/brackets.svg)'}><span>Documentação</span></NavLink></Link>
            <Logout isResponsive><span>sair</span></Logout>
        </NavItem>
        <Logout noResponsive><span>sair</span></Logout>
    </Nav>
    )
}

export default NavPanel