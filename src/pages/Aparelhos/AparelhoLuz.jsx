import React from 'react'
import './Aparelhos.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import comfir from '../../assets/Confirmar.svg'
import excluir from '../../assets/Excluir.svg'

const AparelhoLuz = () => {
    const [nome, setName] = useState("")
    const [pot, setPotencia] = useState("")
    const [usodia, setUsodia] = useState("")
    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando forms")
        console.log(nome, pot,usodia)
        setName("")
        setPotencia("")
        setUsodia("")        
    }

    return (
        <main>
            <section>
                <div>
                    <p>
                        
                    </p>
                </div>
            </section>
            <div>
                <form onSubmit={handleSubmit}>
                    <p> <br /> </p>
                    <label>
                        <span>Nome do Aparelho</span>
                        <input type='text' name='nome' id='Nome' placeholder='Nome do Aparelho'
                            onChange={(e) => setName(e.target.value)} value={nome} />
                    </label><p><br /> </p>
                    <label>
                        <span>Potência do Aparelho</span>
                        <input type='number' name='potencia' id='potencia' placeholder='Potência do Aparelho'
                            onChange={(e) => setPotencia(e.target.value)} value={pot} />
                    </label><p><br /> </p>
                    <label>
                        <span>Tempo de uso diário do Aparelho(h)</span>
                        <input type='text' name='usodia' id='usodia' placeholder='Tempo de uso diário em horas'
                            onChange={(e) => setUsodia(e.target.value)} value={usodia} />
                    </label><p><br /> </p>
                    
                    <div className='justify-content: space-around;'>
                        <Link to="/Luz"><button type='button'><img src={comfir} alt="img" /></button></Link>
                        <Link to="/Luz"><button type='button'><img src={excluir} alt="img" /></button></Link>
                    </div>
                </form>
            </div>
        </main>
    )
}
export default AparelhoLuz
