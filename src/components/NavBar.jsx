import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from '../assets/logo.svg'
import home from '../assets/Home.svg'
import user from '../assets/user.svg'
import fonte from '../assets/Fonte.svg'

const NavBar = () => {
  return (
    <nav>
      <Link to="/"><img src={logo} className='logo' alt="logo" /></Link>
      <Link to="javascript:void(0)"></Link>
      <Link to="javascript:void(0)"></Link>


      <Link to="/"><img src={home} className='home' alt="home" /></Link>

      <a href="javascript:void(0)" id="contraste">Contraste</a>
      <a href="javascript:void(0)" id="semcontraste">Sem contraste</a>
      <a href="javascript:void(0)" id="aumenta">A+</a>
      <Link to="javascript:void(0)"><img src={fonte} className='logo' alt="logo" /></Link>
      <a href="javascript:void(0)" id="diminui">A-</a>


      <Link to="/Login"><img src={user} className='user' alt="user" /></Link>
      {/* 
        <Link to ="/pagina3">Página 3</Link>
        <Link to ="/Form">Form</Link>
        <Link to ="/Form">Form</Link> */}
      <script src="./src/js/contraste.js"></script>
      <script src="./src/js/fonte.js"></script>


    </nav>

  )
}

export default NavBar