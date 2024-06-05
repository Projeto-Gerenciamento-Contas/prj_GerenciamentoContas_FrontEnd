import React from 'react'
import LogoB from '../assets/LogoAzul.svg'
import {Link} from 'react-router-dom'
import './Home.css'
const Home = () => {
  return (
    <main>
      <section>
      <div>
        <img src={LogoB} alt="" />
        <h1>TetoFinanças</h1>
        <p><br/>
        
        </p>
        <div>Sobre TetoFinanças </div>
      <p>
      Essa aplicação serve para serve para facilitar a economia domestica de uma ou mais residencias, organizando os gastos em diferentes categorias,
como aparelhos, produtos gastos, etc
      </p>


      </div>
      <div>
        <div >
        <Link to ="/Login"><button type='button'>Logar</button></Link>
        </div>
        <div>
        <Link to ="/cadastro"><button type='button'>Casdastrar</button></Link>
        </div>
      </div>
     
      </section>
    </main>
  )
}

export default Home
