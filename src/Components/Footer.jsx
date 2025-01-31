import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import '../Footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className='container-fluid footer'>
                    <div className="row">
                        <div className="col">
                            <Link className="navbar-brand text-white fw-bold fs-4" to="/"><FontAwesomeIcon icon={faBagShopping} />Mart</Link>
                            <p className='text-wrap fs-5 text-white-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam natus incidunt odio fugit velit veniam facere consequatur voluptatibus tenetur laboriosam, itaque aspernatur eveniet provident doloribus possimus saepe deleniti. Animi, expedita.</p>
                        </div>
                        <div className="col text-white">
                            <h4>About Us</h4>
                            <ul className='list-unstyled lh-lg fs-5 text-white-50'>
                                <li>Careers</li>
                                <li>Our Stores</li>
                                <li>Our Cares</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="col text-white">
                            <h4>Customer Care</h4>
                            <ul className='list-unstyled lh-lg fs-5 text-white-50'>
                                <li>Help Center</li>
                                <li>How to Buy</li>
                                <li>Track Your Order</li>
                                <li>Corporate & Bulk Purchasing</li>
                                <li>Returns & Refunds</li>
                            </ul>
                        </div>
                        <div className="col text-white">
                            <h4>Contact Us</h4>
                            <div className='text-wrap fs-5 text-white-50'>
                                <p>70 Washington Square South, New T=York, NY 10012, United States</p>
                                <p>Email: example@gmail.com</p>
                                <p>Phone: +1 1123 456 780</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer