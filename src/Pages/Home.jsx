import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCreditCard, faHeadphonesSimple, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import '../Home.css'
// import { SliderData } from '../Products';
const Home = () => {

    return (
        <>
            <Slider>
                <div className="row">
                    {/* {
                    SliderData.map((banner) => (
                        <div className="col" key={banner.id}>
                            <h1>{banner.title}</h1>
                            <p>{banner.desc}</p>
                        </div>
                    ))
                } */}
                </div>

            </Slider>
            <DummyCards />
        </>
    )
}
export const DummyCards = () => {
    return (
        <>
            <div className="container mt-5 mb-5 bg-white p-3">
                <div className="card-grid">
                    <div className="card cardOne" >
                        <FontAwesomeIcon className="mt-5 fs-5" icon={faCar} />
                        <div className="card-body text-center">
                            <h6 className='card-title fw-bold'>Free Shipping</h6>
                            <p className="card-text">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="card cardTwo" >
                        <FontAwesomeIcon className='mt-5 fs-5' icon={faCreditCard} />
                        <div className="card-body text-center">
                            <h6 className='card-title fw-bold'>Safe Payment</h6>
                            <p className="card-text">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="card cardThree" >
                        <FontAwesomeIcon className="mt-5 fs-5" icon={faShieldAlt} />
                        <div className="card-body text-center">
                            <h6 className='card-title fw-bold'>Secure Payment</h6>
                            <p className="card-text">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <div className="card cardFour">
                        <FontAwesomeIcon className='mt-5 fs-5' icon={faHeadphonesSimple} />
                        <div className="card-body text-center">
                            <h6 className='card-title fw-bold'>Back Gaurantee</h6>
                            <p className="card-text">Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home