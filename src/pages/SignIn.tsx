import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom'
import loginImage from "../assets/login-image.svg"

export const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    return <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="card">
                <img src={loginImage} style={{ width: '18rem' }} className="rounded mx-auto d-block mt-5" alt="login-image" />

                <div className="card-body">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Correo
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value || '') }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(p) => { setPassword(p.target.value || '') }}
                        />

                    </div>
                    <div className="d-grid gap-2">
                        <button onClick={() => { console.log(email, password) }} className="btn btn-primary" type="button">
                            Iniciar sesión
                        </button>
                        <div className='d-grid gap-2 col-6 mx-auto mb-2 mt-2'>
                            ¿No tienes una cuenta?
                        </div>
                        <Link className="btn btn-outline-primary" type="button" to={'/sign-up'}>
                            Regístrate
                        </Link>
                    </div>
                    <div>
                        <Link className="btn btn-outlined-primary d-grid gap-2 col-6 mx-auto mb-2 mt-2" type="button" to={'/forgotPassword'} >
                            ¿Olvidaste tu contraseña?
                        </Link>

                    </div>


                </div>
            </div>

        </div >

    </div >
}
