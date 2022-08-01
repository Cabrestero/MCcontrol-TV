import React, { useState } from 'react'
import passwordImage from '../assets/password-image.svg'
export const SignUp = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');


    const [email, setEmail] = useState('');
    //    if (email.includes('@' && '.')) { console.log('') } else { console.log('') }

    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState('');

    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className='card'>
                    <form>
                        <div className='card-body'>
                            <div className="mb-2">
                                <img src={passwordImage} style={{ width: '18rem' }} className="rounded mx-auto d-block mt-2" alt="password" />

                                <label className='mb-1'>Nombres</label>
                                <input
                                    required
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={name}
                                    onChange={(n) => { setName(n.target.value || '') }}
                                />
                            </div>
                            <div className="mb-2">
                                <label className='mb-1 mt-2'>Apellidos</label>
                                <input
                                    required
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    value={lastName}
                                    onChange={(l) => { setLastName(l.target.value || '') }}

                                />
                            </div>
                            <div className="mb-2">
                                <label className='mb-1 mt-2'>Teléfono</label>
                                <input
                                    required
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    value={phone}
                                    onChange={(p) => { setPhone(p.target.value || '') }}
                                />
                            </div>
                            <div className="mb-2">
                                <label className='mb-1 mt-2'>Correo electrónico</label>
                                <input
                                    required
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value || '') }}

                                />
                            </div>
                            <div className="mb-2">
                                <label className='mb-1 mt-2'>Contraseña</label>
                                <input
                                    required
                                    type="text"
                                    className="form-control"
                                    id="password"
                                    value={password}
                                    onChange={(p) => { setPassword(p.target.value || '') }}
                                    placeholder="La contraseña debe contener como mínimo 8 caracteres."
                                    minLength={8}
                                />
                            </div>
                            <div className="mb-2">
                                <label className='mb-1 mt-2'>Confirma tu contraseña</label>
                                <input
                                    required
                                    type="text"
                                    className="form-control mb-4"
                                    id="validPassword"
                                    value={validPassword}
                                    minLength={8}
                                    onChange={(p) => { setValidPassword(p.target.value || '') }}
                                />
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button className="btn btn-primary" type="button">Registrarse</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
