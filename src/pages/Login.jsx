import React from 'react'
import './Form.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
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
                <div></div>
                <p>
                    
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
                    
                    <Link to ="/Menu"><button type='button'>Entrar</button></Link>
                
                    
                </form>

            </div>
        </main>



    )
}

export default Login
