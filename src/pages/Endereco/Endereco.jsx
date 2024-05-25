import React from 'react'
import './Endereco.css'
import ItemmenuE from '../../components/Itemmenuedit/Itemmenuedit'
import luz from '../../assets/LuzW.svg'
import agua from '../../assets/AguaW.svg'
import gas from '../../assets/GasW.svg'
import compras from '../../assets/ComprasW.svg'
import outros from '../../assets/OutrosW.svg'
import novo from '../../assets/Add.svg'
import {Link} from 'react-router-dom'


const Endereco = () => {
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
                link="/Luz"
              /></div>
              <div className="item">
              <ItemmenuE
                img={agua}
                gastos='R$ 28493'
                data='hoje'
                link="/"
              /></div>
              <div className="item">
              <ItemmenuE
                img={gas}
                gastos='R$ 28493'
                data='hoje'
                link="/"
              /></div>
              <div className="item">
              <ItemmenuE
                img={compras}
                gastos='R$ 28493'
                data='hoje'
                link="/"
              /></div>
              <div className="item">
              <ItemmenuE
                img={outros}
                gastos='R$ 28493'
                data='hoje'
                link="/"
              /></div>
          </section>
        </div>        
      </section>
    </main>
  )
}

export default Endereco