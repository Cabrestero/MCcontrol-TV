import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar: React.FC = (props) => {
    const onClose = () => {
        const button = document.getElementById('close-menu')!
        button.click()
    }
    return (
        <nav className="navbar navbar-dark bg-dark mb-5">
            <div className="container-fluid">
                <Link className="navbar-brand" to={'/'}>
                    Home
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="offcanvas offcanvas-end"
                    tabIndex={-1}
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                            MCcontrol TV
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                            id='close-menu'
                        />
                    </div>
                    <div className="offcanvas-body">
                        <div className="d-grid gap-2">
                            <Link onClick={onClose}
                                to={'/sign-in'} className='btn btn-primary'>Iniciar sesión</Link>

                            <Link onClick={onClose} to={'/sign-up'} className='btn btn-outline-primary'>Registrarse</Link>

                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}
