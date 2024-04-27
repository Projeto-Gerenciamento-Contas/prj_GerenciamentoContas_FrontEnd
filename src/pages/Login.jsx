import React from 'react'
import './Form.css'
import { useState } from 'react'
const Login = () => {
    const [login, setLogin] = useState("")
    const [key, setKey] = useState("")
    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando forms")
        console.log(login)
        setLogin("")
        setKey("")
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
                        <span>Login</span>
                        <input type='email' name='login' id='login' placeholder='nome@site.com'
                            onChange={(e) => setLogin(e.target.value)} value={login} />
                    </label><p> <br /> </p>
                  
                    
                    <label>
                        <span>Senha</span>
                        <input type='password' name='key' id='key' placeholder='*********'
                            onChange={(e) => setKey(e.target.value)} value={key} />
                    </label><p> <br /> </p>
                    
                    <button type='submit'>Entrar</button>
                    
                </form>

            </div>
        </main>



    )
}

export default Login