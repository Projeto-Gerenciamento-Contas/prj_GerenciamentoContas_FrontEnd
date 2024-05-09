import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from '../../assets/logo.svg'
import alerta from "../../assets/alertab.svg"
import config from "../../assets/Config.svg"
import user from '../../assets/user.svg'

import '../../App.css'
const NavBar = () => {
  return (
    <nav>
      <Link to="/"><img src={logo} alt="logo" /></Link>
      <div className='navSobre'></div>
      <div className='logado '>
        <div className='simbolos'>
          <img src={alerta} alt="alerta" />
          <img src={config} alt="onfigurações" />
        </div>

        <div className='usuario  '>


          <h2>Olá: { }</h2>
          <Link to="/Login"><img src={user} className='user' alt="user" /></Link>

        </div>
      </div>

      <div className='noCadastro hide'>

        <Link to="/Login"><button type='button'>Logar</button></Link>
        <Link to="/cadastro"><button type='button'>Casdastrar</button></Link>

      </div>



    </nav>

  )
}

export default NavBar