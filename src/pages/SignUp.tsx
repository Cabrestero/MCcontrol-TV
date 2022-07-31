import React, { useState } from 'react'

export const SignUp = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');


    const [email, setEmail] = useState('');
    //    if (email.includes('@' && '.')) { console.log('') } else { console.log('') }

    const [pass, setPass] = useState('');
    const [validPass, setValidPass] = useState('');

    return (
        <div className="row justify-content-center">
            <div className="col-md-6">
                <form>
                    <div className="mb-2">
                        <label className='mb-1'>Nombres</label>
                        <input
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
                            type="text"
                            className="form-control"
                            id="mail"
                            value={email}
                            onChange={(m) => { setEmail(m.target.value || '') }}

                        />
                    </div>
                    <div className="mb-2">
                        <label className='mb-1 mt-2'>Contraseña</label>
                        <input
                            type="text"
                            className="form-control"
                            id="pass"
                            value={pass}
                            onChange={(p) => { setPass(p.target.value || '') }}
                            placeholder="La contraseña debe contener como mínimo 8 caracteres."
                            minLength={8}
                        />
                    </div>
                    <div className="mb-2">
                        <label className='mb-1 mt-2'>Confirma tu contraseña</label>
                        <input
                            type="text"
                            className="form-control mb-4"
                            id="validPass"
                            value={validPass}
                            minLength={8}
                            onChange={(p) => { setValidPass(p.target.value || '') }}
                        />
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn btn-primary" type="button">Registrarse</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
