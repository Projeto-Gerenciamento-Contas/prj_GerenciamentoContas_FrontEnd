//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Form from './pages/Form/Form'
import Login from './pages/Login/Login'
import Cadastro from './pages/Cadastro/Cadastro'
import Menu from './pages/Menu/Menu'
import Acessibilidade from './components/Acessibilidade/Acessibilidade'

function App() {

  return (
    <>
 
      <BrowserRouter>
{         
 }        <NavBar /> 
 <Acessibilidade/>
        <Routes>
          <Route path='/' element={<Home />} />
          
          <Route path='/Form' element={<Form />} />
          <Route path='/Login' element={<Login />} />          
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/Menu' element={<Menu />} />
        </Routes>
        <Footer /> 
            
      </BrowserRouter>  
      
    </>
  )
}

export default App
