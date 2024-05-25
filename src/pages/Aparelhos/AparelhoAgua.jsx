import React from 'react'
import './Aparelhos.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import comfir from '../../assets/Confirmar.svg'
import excluir from '../../assets/Excluir.svg'

const AparelhoAgua = () => {
    const [nome, setName] = useState("")
    const [vazao, setVazao] = useState("")
    const [tempuso, setTempuso] = useState("")
    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando forms")
        console.log(nome, vazao,tempuso)
        setName("")
        setVazao("")
        setTempuso("")        
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
                        <span>Vazão do Aparelho</span>
                        <input type='number' name='vazao' id='vazao' placeholder='Potência do Aparelho'
                            onChange={(e) => setVazao(e.target.value)} value={vazao} />
                    </label><p><br /> </p>
                    <label>
                        <span>Tempo de uso do Aparelho(h)</span>
                        <input type='number' name='tempuso' id='tempuso' placeholder='Tempo de uso diário em horas'
                            onChange={(e) => setTempuso(e.target.value)} value={tempuso} />
                    </label><p><br /> </p>
                    
                    <div className='justify-content: space-around;'>
                        <Link to="/Agua"><button type='button'><img src={comfir} alt="img" /></button></Link>
                        <Link to="/Agua"><button type='button'><img src={excluir} alt="img" /></button></Link>
                    </div>
                </form>
            </div>
        </main>
    )
}
export default AparelhoAgua
