import React from 'react'
import home from '../../assets/Home.svg'
import novo from '../../assets/Add.svg'
import {Link} from 'react-router-dom'
import "./Enderecos.css"
export const Enderecos = ({tipo, cep, rua, numero}) => {
  return (
    <Link to="/Endereco">
    <div className='enderecos'>
        <img src={home} alt="enderecos" id ="home" />
        <h3 id="tipo">{tipo}</h3>
        <p className='dados'>{cep}</p>
        <p className='dados'>{rua},</p>
        <p className='dados'>{numero}</p>
       
    </div>
    </Link>
  )
}
