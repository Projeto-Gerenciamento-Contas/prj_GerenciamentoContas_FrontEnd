import React from 'react'
import './Submenu.css'
import ItemmenuE from '../../components/Itemmenuedit/Itemmenuedit'
import luz from '../../assets/LuzW.svg'
import aparelho from '../../assets/Aparelho.svg'

import novo from '../../assets/Add.svg'
import {Link} from 'react-router-dom'


const Luz = () => {
  return (
    <main>
      <section>
        <div>
          <section >
            <div className="item">
              <ItemmenuE
                img={luz}
                gastos='R$ 28493'
                data='hoje'
                link="/AparelhoLuz"
              /></div>
              <div className="item">
              <ItemmenuE
                img={aparelho}
                gastos='R$ 28493'
                data='hoje'
                link="/AparelhoLuz"
              /></div>
              <div className="item">
              <ItemmenuE
                img={aparelho}
                gastos='R$ 28493'
                data='hoje'
                link="/AparelhoLuz"
              /></div>
              <div className="item">
              <ItemmenuE
                img={aparelho}
                gastos='R$ 28493'
                data='hoje'
                link="/AparelhoLuz"
              /></div>
              <div className="item">
              <ItemmenuE
                img={aparelho}
                gastos='R$ 28493'
                data='hoje'
                link="/AparelhoLuz"
              /></div>
          </section>
        </div>

        <Link to="/AparelhoLuz"><div id="sNovo"><img src={novo} alt="novo" className='novo' /></div></Link>
      </section>
    </main>
  )
}

export default Luz