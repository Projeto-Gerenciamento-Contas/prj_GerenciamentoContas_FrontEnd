import React from 'react'
import './Aparelhos.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import comfir from '../../assets/Confirmar.svg'
import excluir from '../../assets/Excluir.svg'

const ItemCompras = () => {
    const [nome, setName] = useState("")
    const [preco, setPreco] = useState("")
    const [Compl, setCompl] = useState("")
    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando forms")
        console.log(nome, preco,Compl)
        setName("")
        setPreco("")
        setCompl("")        
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
                        <span>Nome do produto</span>
                        <input type='text' name='nome' id='Nome' placeholder='Nome do produto'
                            onChange={(e) => setName(e.target.value)} value={nome} />
                    </label><p><br /> </p>
                    <label>
                        <span>Valor total do produto</span>
                        <input type='number' name='vazao' id='vazao' placeholder='Valor total do produto'
                            onChange={(e) => setVazao(e.target.value)} value={vazao} />
                    </label><p><br /> </p>
                    <label>
                        <span>Complemento</span>
                        <input type='text' name='complemento' id='complemento' placeholder='Ex:quantidade,loja,marca...'
                            onChange={(e) => setCompl(e.target.value)} value={Compl} />
                    </label><p> <br /> </p>
                    
                    <div className='justify-content: space-around;'>
                        <Link to="/Luz"><button type='button'><img src={comfir} alt="img" /></button></Link>
                        <Link to="/Luz"><button type='button'><img src={excluir} alt="img" /></button></Link>
                    </div>
                </form>
            </div>
        </main>
    )
}
export default ItemCompras
