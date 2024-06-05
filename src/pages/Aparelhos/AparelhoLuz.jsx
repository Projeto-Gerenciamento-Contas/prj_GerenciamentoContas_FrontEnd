import React from 'react'
import './Aparelhos.css'
import { useState } from 'react'
import '../Login/Login.css'
import "../../App.css"

import Input from '../../components/Input/Input'
import { Link } from 'react-router-dom'
import comfir from '../../assets/Confirmar.svg'
import excluir from '../../assets/Excluir.svg'
import Logo from '../../components/Logo/Logo'

const AparelhoLuz = () => {
    const [nome, setName] = useState("")
    const [pot, setPotencia] = useState("")
    const [usodia, setUsodia] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando forms")
        console.log(nome, pot, usodia)
        setName("")
        setPotencia("")
        setUsodia("")
    }

    return (
        <main>
            <section>
                <Logo />
                <h1>Salvar Aparelho eletrico</h1>

                <form onSubmit={handleSubmit}>
                    <Input
                    
                    func="Nome do aparelho"
                    type="text"
                    placeholder="Nome do aparelho"
                    />
                    <Input
                    
                    func="Potencia do aparelho (WATTS)"
                    type="number"
                    placeholder="W"
                    />
                    <Input id="tempo"
                    
                    func="Tempo de uso diário do Aparelho(h)"
                    type="time"
                    placeholder="Potencia do aparelho"
                    />
               
                 
                  

                    <div className='justify-content: space-around;'>
                        <Link to="/Luz"><button className='buttonsp ' type='button'><img src={comfir} alt="img" /></button></Link>
                        <Link to="/Luz"><button className='buttonsp ' type='button'><img src={excluir} alt="img" /></button></Link>
                    </div>
                </form>

            </section>
        </main>
    )
}
export default AparelhoLuz
