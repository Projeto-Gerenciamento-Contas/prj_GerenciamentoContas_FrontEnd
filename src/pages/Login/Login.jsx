import React from 'react'
import './Login.css'
import "../../App.css"
import Logo from "../../components/Logo/Logo"
import User from "../../assets/user.svg"
import Lock from "../../assets/lock.svg"
import Input from '../../components/Input/Input'
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
                    <Input
                        func="login"
                        img={User}
                        alt='logo usuario'
                        type="email"
                        placeholder='Nome de usuario ou email'

                    />
                    <Input
                        func="Senha"
                        img={Lock}
                        alt='cadeado'
                        type="password"
                        placeholder='*********'

                    />





                    <label>

                        <input type="checkbox" />
                        <span className='login'>Lembre-me</span>
                    </label>

                    <Link to="/Menu"><button type='button' className='buttonsp log'>Entrar</button></Link>


                </form>

            </div>
        </main>



    )
}

export default Login
