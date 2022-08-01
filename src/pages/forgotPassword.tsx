import React from "react";
import passwordForgot from '../assets/password-forgot.svg'

export const forgotPassword = () => {
    return <div className="row justify-content center">
        <div className="col-md-6">
            <div className="card">
                <img src={passwordForgot} style={{ width: '18rem' }} className="rounded mx-auto d-block mt-2" alt="password-forgot" />
                <div className="card-body">
                    <label htmlFor="email" className="form-label">
                        Correo de recuperacion
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={''}
                    //onChange={(e) => { setEmail(e.target.value || '') }}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Recuperar contraseña
                    </label>

                </div>
            </div>
        </div>
    </div>
}