import React from 'react'
import './Submenu.css'
import ItemmenuE from '../../components/Itemmenuedit/Itemmenuedit'

import agua from '../../assets/AguaW.svg'

import novo from '../../assets/Add.svg'
import Logo from '../../components/Logo/Logo'
import { Link } from 'react-router-dom'


const Agua = () => {
  return (
    <main>
      <section>
      <Logo/>
        <h1>Aparelhos de agua</h1>
        <div>
          <section >
            <div className="item">
              <ItemmenuE
                img={agua}
                gastos='R$ 28493'
                data='total'
                link="/AparelhoAgua"
              /></div>
            <div className="item">
              <ItemmenuE
                img={agua}
                gastos='R$ 28493'
                data='hoje'
                link="/AparelhoAgua"
              /></div>
         
          </section>
        </div>

        <Link to="/AparelhoAgua"><div id="sNovo"><img src={novo} alt="novo" className='novo' /></div></Link>
      </section>
    </main>
  )
}

export default Agua