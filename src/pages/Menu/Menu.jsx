import React from 'react'
import './Menu.css'
import Itemmenu from '../../components/Itemmenu/Itemmenu'
import luz from '../../assets/LuzW.svg'
import agua from '../../assets/AguaW.svg'
import gas from '../../assets/GasW.svg'
import compras from '../../assets/ComprasW.svg'
import outros from '../../assets/OutrosW.svg'
import home from '../../assets/Home.svg'
import novo from '../../assets/Add.svg'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <main>
      <section>
        <div>
          <section className='menuback'>
            <div className="grid">
              <div className="item">
                <Itemmenu
                  img={luz}
                  gastos='R$ 28493'
                  data='hoje'
                /></div>
              <div className="item">
              <Itemmenu
                  img={agua}
                  gastos='R$ 28493'
                  data='hoje'
                />
              </div>
            </div>
            <div className="grid">
              <div className="item"><Itemmenu
                  img={gas}
                  gastos='R$ 28493'
                  data='hoje'
                /></div>
              <div className="item"><Itemmenu
                  img={compras}
                  gastos='R$ 28493'
                  data='hoje'
                /></div>
            </div>
            <div className="grid">
              <div className="item"><Itemmenu
                  img={outros}
                  gastos='R$ 28493'
                  data='hoje'
                /></div>
              <div ></div>
            </div>
          </section>
        </div>
        <div>
          <section className='menuback'>
            <div className='enderecoback'>
              <div className="itemendereco">
                <Itemmenu
                  img={home}
                  gastos='pessoal'
                  data='08351-743 Rua das mangeiras,420'
                /></div>
              <div className="itemendereco">
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