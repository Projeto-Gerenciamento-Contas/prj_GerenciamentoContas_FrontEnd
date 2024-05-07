import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from '../assets/logo.svg'

import user from '../assets/user.svg'

import '../App.css'
const NavBar = () => {
  return (
    <nav>
      <Link to="/"><img src={logo} alt="logo" /></Link>
      <div className='navSobre'></div>
      <div className='usuario '>
      <h2>Olá: {}</h2>
        <Link to="/Login"><img src={user} className='user' alt="user" /></Link>
        
      </div>
      <div className='noCadastro hide'>

        <Link to="/Login"><button type='button'>Logar</button></Link>
        <Link to="/cadastro"><button type='button'>Casdastrar</button></Link>

      </div>



    </nav>

  )
}

export default NavBar