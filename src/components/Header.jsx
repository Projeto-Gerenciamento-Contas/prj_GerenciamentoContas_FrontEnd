import React from 'react'
import logo from '../assets/logo.svg'
import './Header.css'
import { Link } from 'react-router-dom'
import './NavBar.css'

const header = () => {
    return (
        <header>
            <nav>
                
                <Link to="/"><img src={logo}  alt="logo" /></Link>
                <Link to="/pagina2">Página 2</Link>
                <Link to="/Login">Login</Link>
                <Link to="/Cadastro">Cadastro</Link>

                {/* 
        <Link to ="/pagina3">Página 3</Link>
        <Link to ="/Form">Form</Link>
        <Link to ="/Form">Form</Link> */}
            </nav>
        </header>
        /*<img src={logo} className='logo' alt="logo"/>
        <h1>Exercício 2 - React</h1>*/
    )
}

export default header