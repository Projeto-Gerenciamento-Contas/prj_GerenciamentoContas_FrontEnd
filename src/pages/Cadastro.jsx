import React from 'react'
import './Cadastro.css'
import { useState } from 'react'
import {Link} from 'react-router-dom'
const Cadastro = () => {
    const [nome, setName] = useState("")
    const [email, setEmail] = useState("")
    const [data, setData] = useState("")
    const [key, setKey] = useState("")
    const [Ckey, setCkey] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando forms")
        console.log(nome, email)
        setName("")
        setEmail("")
        setData("")
        setKey("")
        setCkey("")
    }

    return (
        <main>
            <section>
                <div>
                    <p>
                        Formulário de Cadastro
                    </p>
                </div>
            </section>
            <div>
                <form onSubmit={handleSubmit}>
                    <p> <br /> </p>
                    <label>
                        <span>Nome</span>
                        <input type='text' name='nome' id='Nome' placeholder='Nome Completo'
                            onChange={(e) => setName(e.target.value)} value={nome} />
                    </label><p><br /> </p>

                    <label>
                        <span>E-Mail</span>
                        <input type='email' name='email' id='email' placeholder='nome@site.com'
                            onChange={(e) => setEmail(e.target.value)} value={email} />
                    </label><p> <br /> </p>
                    <label>
                        <span>Data de nascimento</span>
                        <input type='date' name='data' id='data' placeholder='dd/mm/aaaa'
                            onChange={(e) => setData(e.target.value)} value={data} />
                    </label><p> <br /> </p>
                    
                    <label>
                        <span>Senha</span>
                        <input type='password' name='key' id='key' placeholder='*********'
                            onChange={(e) => setKey(e.target.value)} value={key} />
                    </label><p> <br /> </p>
                    
                    <label>
                        <span>Comfirmar Senha</span>
                        <input type='password' name='key' id='key' placeholder='*********'
                            onChange={(e) => setKey(e.target.value)} value={Ckey} />
                    </label><p> <br /> </p>
                    <Link to ="/Menu"><button type='button'>Enviar</button></Link>
                </form>

            </div>
        </main>



    )
}

export default Cadastro
