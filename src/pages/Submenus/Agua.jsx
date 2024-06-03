import React from 'react'
import './Submenu.css'
import ItemmenuE from '../../components/Itemmenuedit/Itemmenuedit'
import luz from '../../assets/LuzW.svg'
import agua from '../../assets/AguaW.svg'
import gas from '../../assets/GasW.svg'
import compras from '../../assets/ComprasW.svg'
import outros from '../../assets/OutrosW.svg'
import home from '../../assets/Home.svg'
import novo from '../../assets/Add.svg'
import aparelho from '../../assets/Aparelho.svg'
import {Link} from 'react-router-dom'


const Agua = () => {
  return (
    <main>
      <section>
        <div>
          <section >
            <div className="item">
              <ItemmenuE
                img={agua}
                gastos='R$ 28493'
                data='hoje'
                link="/AparelhoAgua"
              /></div>
              <div className="item">
              <ItemmenuE
                img={agua}
                gastos='R$ 28493'
                data='hoje'
                link="/AparelhoAgua"
              /></div>
              <div className="item">
              <ItemmenuE
                img={agua}
                gastos='R$ 28493'
                data='hoje'
                link="/AparelhoAgua"
              /></div>
              <div className="item">
              <ItemmenuE
                img={agua}
                gastos='R$ 28493'
                data='hoje'
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