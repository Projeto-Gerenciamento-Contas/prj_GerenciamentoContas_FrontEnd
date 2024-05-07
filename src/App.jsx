//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Form from './pages/Form'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Menu from './pages/Menu'

function App() {

  return (
    <>
 
      <BrowserRouter>
{         
 }        <NavBar /> 
 
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
