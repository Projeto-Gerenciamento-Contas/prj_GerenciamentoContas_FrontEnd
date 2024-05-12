import React from 'react'
import './Endereco.css'
import Itemmenu from '../../components/Itemmenu/Itemmenu'
import luz from '../../assets/Luz.svg'
import novo from '../../assets/Add.svg'
import {Link} from 'react-router-dom'

const Endereco = () => {
  return (
    <main>
      <section>
        <div>
          <section >
            <div class="item">
              <Itemmenu
                img={luz}
                gastos='R$ 28493'
                data='hoje'
              /></div>
              <div class="item">
              <Itemmenu
                img={luz}
                gastos='R$ 28493'
                data='hoje'
              /></div>
              <div class="item">
              <Itemmenu
                img={luz}
                gastos='R$ 28493'
                data='hoje'
              /></div>
              <div class="item">
              <Itemmenu
                img={luz}
                gastos='R$ 28493'
                data='hoje'
              /></div>
              <div class="item">
              <Itemmenu
                img={luz}
                gastos='R$ 28493'
                data='hoje'
              /></div>
          </section>
        </div>

        <Link to="/"><div id="sNovo"><img src={novo} alt="novo" className='novo' /></div></Link>
      </section>
    </main>
  )
}

export default Endereco