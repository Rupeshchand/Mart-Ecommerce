import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBagShopping, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'; 
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white p-3 shadow ">
                <div className="container-fluid ms-4">
                    <Link className="navbar-brand" to="/"><FontAwesomeIcon icon={faBagShopping} /> 
                    Mart</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end me-5 " id="navbarNav">
                        <ul className="navbar-nav fs-5 gap-5 text-black">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-black" to="/shop">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-black" to="/cart">Cart</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav fs-5 text-black ms-3 me-4">
                        <li className="nav-item">
                                <Link className="nav-link text-black" to="/"><FontAwesomeIcon icon={faUser} /></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-black" to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header