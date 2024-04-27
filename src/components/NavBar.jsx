import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import logo from '../assets/logo.svg'
const NavBar = () => {
  return (
    <nav>
        <img src={logo} className='logo' alt="logo"/>
        <Link to="/">Home</Link>
        <Link to ="/pagina2">Página 2</Link>
        <Link to ="/Login">Login</Link>
        <Link to ="/Cadastro">Cadastro</Link>

        {/* 
        <Link to ="/pagina3">Página 3</Link>
        <Link to ="/Form">Form</Link>
        <Link to ="/Form">Form</Link> */}
    </nav>
  )
}

export default NavBar