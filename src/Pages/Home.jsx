import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCreditCard, faHeadphonesSimple, faShieldAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import '../Home.css'
import { AiOutlineHeart } from 'react-icons/ai';
import { discoutProducts } from '../Products';
import { SliderData } from '../Products';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from '../Redux/CartSlice';
const Home = () => {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };
    return (
        <>
            <div className='sliderContainer'>

                <Slider {...settings}>
                    {
                        SliderData.map((banner) => (

                            <div className='slide border border-0 m-5' key={banner.id}>
                                <div className="row align-items-center m-5">
                                    <div className="col">
                                        <h1 className='bannerTitle'>{banner.title}</h1>
                                        <p className='bannerDesc'>{banner.desc}</p>
                                        <button className='border border-0 p-1'>Visit Collections</button>
                                    </div>
                                    <div className="col ms-5">
                                        <img src={banner.cover} alt={banner.title} />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
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
    const dispatch = useDispatch()
    const handleAdd = (product) => {
        dispatch(add(product))
    }
    return (
        <>
            <div className="bigDiscContainer">
                <h2 className='text-center discTitle'>Big Discount</h2>
                <div className="row d-flex justify-content-center mt-5 mb-5 gap-0" >
                    {
                        discoutProducts && discoutProducts.length > 0 && discoutProducts.map((product) => (
                            <div className="col-md-3 m-2" key={product.id}>
                                <div className="card p-4 border border-0 bg-white shadow product-cards">
                                    <Link className='text-decoration-none' to={`/product-details/${product.id}`} >
                                        <div className='d-flex justify-content-between'>
                                            <p className='border border-0 rounded-pill p-1 discount'>{product.discount}% Off</p>
                                            <AiOutlineHeart size={20} />
                                        </div>
                                        <div className="mx-auto">
                                            <img className='img-fluid product-img' src={product.imgUrl} alt={product.productName} />
                                        </div>
                                    </Link>
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
                                            <button className='btn border rounded-circle' onClick={() => { handleAdd(product) }}>+</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default Home