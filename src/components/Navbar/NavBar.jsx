import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import logo from '../../assets/logo.svg'
import alerta from "../../assets/alertab.svg"
import config from "../../assets/Config.svg"
import user from '../../assets/user.svg'
import contraste from '../../assets/contrast.svg'
import { FaBars } from "react-icons/fa"
import '../../App.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let lvl = 0;
  let larguraTela = screen.width;
  let alturaTela = screen.height;
  function res(){
    let simbolos = document.querySelector(".simbolos")
    if (larguraTela <= 550) {
      simbolos.classList.add("hide")
    }
  }
/*

  
*/

  const showSidebar = () => setSideBar(!sidebar)



  function contrasteBtn() {

    let c = document.querySelector("p")
    c.innerText = `contraste ${lvl}`
    if (lvl >= 2) {
      lvl = 0
    } else {
      lvl++;
    }
    /*  if (lvl == 0){//contraste normal
        tag[0].href = url1
      }
      else if (lvl == 1){//alto contraste
        tag[0].href = url2
      }
      else if(lvl == 2){//contraste azul
        tag[0].href = url3
      }
      else{
        lvl = 0
      }*/

  }
  return (
    <nav on={res}>
      <div className='Container'>
        <FaBars onClick={handleShow} className="aside" />
        <Link to="/"><div id="logoHome"><img src={logo} alt="logo" className='logo' /></div></Link>
      </div>
      <div className='navSobre'>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
      </div>
      <div className='logado  '>
        <div className='simbolos ' >
          <img className='constrasteImg' src={contraste} onClick={contrasteBtn} alt="contraste" />
          <img src={alerta} alt="alerta" />
          <img src={config} alt="onfigurações" />
        </div>

        <div className='usuario  '>
          <h2>Olá: { }</h2>
          <Link to="/Login"><img src={user} className='user' alt="user" /></Link>
        </div>
      </div>
      <div className='noCadastro hide'>
        <img className='constrasteImg' src={contraste} onClick={contrasteBtn} alt="alerta" />
        <Link to="/Login"><button type='button'>Logar</button></Link>
        <Link to="/cadastro"><button type='button'>Casdastrar</button></Link>
      </div>
    </nav>
  )
}

export default NavBar