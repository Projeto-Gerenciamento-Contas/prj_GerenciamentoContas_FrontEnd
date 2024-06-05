import React from 'react'
import './Form.css'
import { useState } from 'react'
const Form = () => {
    const [nome, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando forms")
        console.log(nome, email, mensagem)
        setName("")
        setEmail("")
        setMensagem("")
    }

    return (
        <main>
            <section>
                <div>Formulário</div>
                <p>
                    Esta página criada na aula de Laboratório de Desenvolvimento Web utiliza formulário.
                </p>
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
                        <span>Mensagem</span>
                        <textarea name='mensagem' id='mensagem' cols="30" rows="10"
                            onChange={(e) => setMensagem(e.target.value)} value={mensagem} />
                    </label><p> <br /> </p>
                    <button type='submit'>Enviar</button>
                </form>

            </div>
        </main>



    )
}

export default Form