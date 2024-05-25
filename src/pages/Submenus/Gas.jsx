import React from 'react'
import './Submenu.css'
import ItemmenuE from '../../components/Itemmenuedit/Itemmenuedit'
import luz from '../../assets/LuzW.svg'
import aparelho from '../../assets/Aparelho.svg'
import gas from '../../assets/GasW.svg'
import novo from '../../assets/Add.svg'
import {Link} from 'react-router-dom'


const Gas = () => {
  return (
    <main>
      <section>
        <div>
          <section >
            <div className="item">
              <ItemmenuE
                img={gas}
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
                img={gas}
                gastos='R$ 28493'
                data='hoje'
                link="/"
              /></div>            
              
          </section>
        </div>

        <Link to="/"><div id="sNovo"><img src={novo} alt="novo" className='novo' /></div></Link>
      </section>
    </main>
  )
}

export default Gas