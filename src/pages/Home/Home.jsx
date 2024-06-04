import React from 'react'
import Logo from "../../components/Logo/Logo"
import { Link } from 'react-router-dom'
import './Home.css'
import Aside from '../../components/Aside/Aside'
const Home = () => {
  return (
    <>

      <main>
        <section>
<Aside/>
          <div>
            <Logo/>
           
            <h2>Sobre TetoFinanças</h2>
            <p>
              Essa aplicação serve para serve para facilitar a economia domestica de uma ou mais residencias, organizando os gastos em diferentes categorias,
              como aparelhos, produtos gastos, etc
            </p>
          </div>
          <div>
            
              <Link to="/Login"><button type='button'>Logar</button></Link>
            
              <Link to="/cadastro"><button type='button'>Casdastrar</button></Link>
           
          </div>

        </section>
      </main>
    </>
  )
}

export default Home