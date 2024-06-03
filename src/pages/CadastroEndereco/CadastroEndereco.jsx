import React from 'react'
import './CadastroEndereco.css'
import { useState } from 'react'
import {Link} from 'react-router-dom'
const CadastroEndereco = () => {
    const [cep, setCEP] = useState("")
    const [cidade, setCidade] = useState("")
    const [bairro, setBairro] = useState("")
    const [rua, setRua] = useState("")
    const [Numbr, setNumbr] = useState("")
    const [Compl, setCompl] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando forms")
        console.log(cep, cidade,bairro,rua,Numbr,Compl)
        setCEP("")
        setCidade("")
        setBairro("")
        setRua("")
        setNumbr("")
        setCompl("")
    }

    return (
        <main>
            <section>
                <div>
                    <p>
                        Formulário de Endereço
                    </p>
                </div>
            </section>
            <div>
                <form onSubmit={handleSubmit}>
                    <p> <br /> </p>
                    <label>
                        <span>CEP</span>
                        <input type='number' name='CEP' id='CEP' placeholder='CEP'
                            onChange={(e) => setCEP(e.target.value)} value={cep} />
                    </label><p><br /> </p>

                    <label>
                        <span>Cidade</span>
                        <input type='text' name='cidade' id='cidade' placeholder='Cidade'
                            onChange={(e) => setCidade(e.target.value)} value={cidade} />
                    </label><p> <br /> </p>
                    
                    <label>
                        <span>Bairro</span>
                        <input type='text' name='bairro' id='bairro' placeholder='Bairro'
                            onChange={(e) => setBairro(e.target.value)} value={bairro} />
                    </label><p> <br /> </p>

                    <label>
                        <span>Rua</span>
                        <input type='text' name='rua' id='rua' placeholder='Rua'
                            onChange={(e) => setRua(e.target.value)} value={rua} />
                    </label><p> <br /> </p>

                    <label>
                        <span>Nº</span>
                        <input type='text' name='cidade' id='cidade' placeholder='nome@site.com'
                            onChange={(e) => setNumbr(e.target.value)} value={Numbr} />
                    </label><p> <br /> </p>

                    <label>
                        <span>Complemento</span>
                        <input type='text' name='complemento' id='complemento' placeholder='Complemento'
                            onChange={(e) => setCompl(e.target.value)} value={Compl} />
                    </label><p> <br /> </p>

                    <div className='justify-content: space-around;'>
                        <Link to="/Menu"><button type='button'><img src={comfir} alt="img" /></button></Link><p/>
                        <Link to="/Menu"><button type='button'><img src={excluir} alt="img" /></button></Link>
                    </div>
                </form>

            </div>
        </main>



    )
}

export default CadastroEndereco
