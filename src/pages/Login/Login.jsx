import React from 'react'
import './Login.css'
import "../../App.css"
import Logo from "../../components/Logo/Logo"
import User from "../../assets/user.svg"
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
            <Logo />
            <div>
                <form onSubmit={handleSubmit}>


                    <label>
                        <span className='login'>Login</span>
                        <div className='Dinput'>
                        <img src={User} alt="" />
                        <input type='email' name='login' id='login' placeholder='Nome de usuario ou email'
                            onChange={(e) => setLogin(e.target.value)} value={login} />
                            </div>
                    </label>


                    <label>
                        <span className='login'>Senha</span>
                        <input type='password' name='key' id='key' placeholder='*********'
                            onChange={(e) => setKey(e.target.value)} value={key} />
                    </label>
                    <label>

                        <input type="checkbox" />
                        <span className='login'>Lembre-me</span>
                    </label>

                    <Link to="/Menu"><button type='button' className='log'>Entrar</button></Link>


                </form>

            </div>
        </main>



    )
}

export default Login
