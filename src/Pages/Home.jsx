import React from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCreditCard, faHeadphonesSimple, faShieldAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import '../Home.css'
import { AiOutlineHeart } from 'react-icons/ai';
import { discoutProducts } from '../Products';
import { SliderData } from '../Products';
const Home = () => {
    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    {
                        SliderData.map((banner) => (
                            <>
                                <div className="carousel-item active">
                                    <h1>{banner.title}</h1>
                                    <p>{banner.desc}</p>
                                </div>
                                <div className="carousel-item">
                                    <img src={banner.cover} className="d-block w-100 bannerImage" alt={banner.title} />
                                </div>
                            </>
                        ))
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <DummyCards />
            <DiscountedProdcts />
        </>
    )
}
//Dummy Cards
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

//Discount Products

export const DiscountedProdcts = () => {

    return (
        <>
            <h2 className='text-center'>Big Discount</h2>
            <div className="row d-flex justify-content-center mt-5 mb-5 gap-0" >
                {
                    discoutProducts && discoutProducts.length > 0 && discoutProducts.map((product) => (
                        <div className="col-md-3 m-2">
                            <div className="card p-4 border border-0 bg-white shadow product-cards">
                                <div className='d-flex justify-content-between'>
                                    <p className='border border-0 rounded-pill p-1'>{product.discount}% Off</p>
                                    <AiOutlineHeart size={20} />
                                </div>
                                <div className="mx-auto">
                                    <img className='img-fluid product-img' src={product.imgUrl} alt={product.productName} />
                                </div>
                                <div>
                                    <p className="fs-5 fw-bold mt-3">{product.productName}</p>
                                    <div className='text-warning ratings'>
                                        <FontAwesomeIcon className='g-col-6' icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <div className='d-flex justify-content-between mt-4 lh-lg'>
                                        <p className='fs-2  fw-semibold'>$ {product.price}</p>
                                        <button className='btn border rounded-circle'>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default Home