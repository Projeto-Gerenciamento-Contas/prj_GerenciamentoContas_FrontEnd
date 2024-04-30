//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Page2 from './pages/Pagina2'
import Page3 from './pages/Pagina3'
import Form from './pages/Form'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Menu from './pages/Menu'

function App() {

  return (
    <>
      {/* <div>
        <ShowUserName name='Ciclano' />
        {users.map((users) => (
          <UserDetails
            key={users.id}
            nome={users.nome}
            idade={users.idade}
            profissao={users.profissao} />
        ))}
      </div> */}
     {/*  <div>
       
        {cars.map((cars) => (
          <CarDetails
            key={cars.id}
            marca={cars.marca}
            km={cars.km}
            cor={cars.cor} 
            ano={cars.ano}/>
        ))}
      </div>
 */}
      <BrowserRouter>
{/*         <Header />
 */}        <NavBar /> 
 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/pagina2' element={<Page2 />} />
          <Route path='/pagina3' element={<Page3 />} />
          <Route path='/Form' element={<Form />} />
          <Route path='/Login' element={<Login />} />          
          <Route path='/Cadastro' element={<Cadastro />} />
          <Route path='/Menu' element={<Menu />} />
        </Routes>
        <Footer /> 
            
      </BrowserRouter>  
      
    </>
  )
}

export default App
