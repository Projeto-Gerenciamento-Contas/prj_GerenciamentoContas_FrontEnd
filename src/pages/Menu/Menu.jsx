import React from 'react'
import './Menu.css'
import Itemmenu from '../../components/Itemmenu/Itemmenu'
import luz from '../../assets/Luz.svg'
import home from '../../assets/Home.svg'
import novo from '../../assets/Add.svg'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <main>
      <section>
        <div>
          <section className='menuback'>
            <div class="grid">
              <div class="item">
                <Itemmenu
                  img={luz}
                  gastos='R$ 28493'
                  data='hoje'
                /></div>
              <div class="item">item 2</div>
            </div>
            <div class="grid">
              <div class="item">item 1</div>
              <div class="item">item 2</div>
            </div>
            <div class="grid">
              <div class="item">item 1</div>
              <div class="item">item 2</div>
            </div>
          </section>
        </div>
        <div>
          <section className='menuback'>
            <div className='enderecoback'>
              <div class="itemendereco">
                <Itemmenu
                  img={home}
                  gastos='pessoal'
                  data='08351-743 Rua das mangeiras,420'
                /></div>
              <div class="itemendereco">
              <Link to="/Endereco"><div id="sNovo"><img src={novo} alt="novo" className='novo' /></div></Link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

export default Home