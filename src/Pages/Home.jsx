import React, { useContext } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCreditCard, faHeadphonesSimple, faShieldAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import '../Home.css'
import { AiOutlineHeart } from 'react-icons/ai';
import { discountProducts } from '../Products';
import { SliderData } from '../Products';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from '../Redux/CartSlice';
import { context } from '../Components/ContextProvider';
import { products } from '../Products';
import { Bounce, ToastContainer, toast } from 'react-toastify';
const notify = () =>
    toast.success('Product has been added to cart!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        boxShadow: "none",
        closeOnClick: true
    });
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
                            <div className='slide border border-0' key={banner.id}>
                                <div className="row align-items-center slideRow">
                                    <div className="col-md-6">
                                        <h1 className='bannerTitle'>{banner.title}</h1>
                                        <p className='bannerDesc text-wrap'>{banner.desc}</p>
                                        <button className='border border-0 p-1'>Visit Collections</button>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xxl-6">
                                        <img src={banner.cover} alt={banner.title} className='img-fluid bannerImg'/>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <DummyCards />
            <DiscountedProdcts />
            <NewArrivals />
            <BestSales />
        </>
    )
}
//Dummy Cards
export const DummyCards = () => {
    return (
        <>
            <div className="container mt-5 mb-5 bg-white p-3">
                <div className="row card-grid">
                    <div className="col-md-6 col-lg-4 col-xxl-4 card cardOne" >
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
        updateCount(count + 1)
        notify()
    }
    const { count, updateCount } = useContext(context)
    return (
        <>
            <div className="bigDiscContainer">
                <div className="row d-flex justify-content-center mb-5 bigDiscCards gx-4 gy-4" >
                    <h2 className='text-center fs-1 discTitle mb-5'>Big Discount</h2>
                    {
                        discountProducts && discountProducts.length > 0 && discountProducts.map((product) => (
                            <div className="col-md-6 col-lg-4 col-xxl-4 w-auto" key={product.id}>
                                <div className="card p-4 border border-0 bg-white shadow product-cards">
                                    <Link className='text-decoration-none' to={`/product-details/${product.id}`} >
                                        <div className='d-flex justify-content-between'>
                                            <p className='border border-0 rounded-pill p-1 discount'>{product.discount}% Off</p>
                                            <AiOutlineHeart className="heart text-black" size={20} />
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
                                            <button className='btn border rounded-circle addBtn' onClick={() => { handleAdd(product) }}>+</button>
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

//New Arrivals
export const NewArrivals = () => {
    const dispatch = useDispatch()
    const handleAdd = (product) => {
        dispatch(add(product))
        updateCount(count + 1)
        notify()
    }
    const allowedCategories = ["mobile", "wireless"]
    const category = products.filter((product) => allowedCategories.includes(product.category))
    const { count, updateCount } = useContext(context)
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <div className="newArrivalsContainer bg-white">
                <div className="row d-flex justify-content-center mb-5 gx-4 gy-4 newArrivalsCards" >
                    <h2 className='newTitle fs-1 text-center mb-5'>New Arrivals</h2>
                    {
                        category && category.length > 0 && category.map((product) => (
                            <div className="col-md-6 col-lg-4 col-xxl-4 w-auto" key={product.id}>
                                <div className="card p-4 border border-0 bg-white shadow product-cards">
                                    <Link className='text-decoration-none' to={`/product-details/${product.id}`}>
                                        <div>
                                            <AiOutlineHeart className="whishlist text-black" size={20} />
                                        </div>
                                        <div className="mx-auto mt-5">
                                            <img className='img-fluid product-img' src={product.imgUrl} alt={product.productName} />
                                        </div>
                                        <div>
                                            <p className="fs-5 fw-bold mt-3 text-black">{product.productName}</p>
                                        </div>
                                    </Link>
                                    <div className='text-warning ratings'>
                                        <FontAwesomeIcon className='g-col-6' icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <div className='d-flex justify-content-between mt-4 lh-lg'>
                                        <p className='fs-2  fw-semibold'>$ {product.price}</p>
                                        <button className='btn border rounded-circle addBtn' onClick={() => { handleAdd(product) }}>+</button>
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

//Best Sales
export const BestSales = () => {
    const dispatch = useDispatch()
    const handleAdd = (product) => {
        dispatch(add(product))
        updateCount(count + 1)
        notify()
    }
    const category = products.filter((product) => product.category === 'sofa')
    const { count, updateCount } = useContext(context)
    return (
        <>
            <div className="bestSalesContainer">
                <div className="row d-flex justify-content-center mb-5 gx-4 gy-4 bestSalesCards" >
                <h2 className='text-center fs-1 bestSalesTitle mb-5'>Best Sales</h2>
                    {
                        category && category.length > 0 && category.map((product) => (
                            <div className="col-md-6 col-lg-4 col-xxl-4 w-auto" key={product.id}>
                                <div className="card p-4 border border-0 bg-white shadow product-cards">
                                    <Link className='text-decoration-none' to={`/product-details/${product.id}`}>
                                        <div>
                                            <AiOutlineHeart className="whishlist text-black" size={20} />
                                        </div>
                                        <div className="mx-auto mt-5">
                                            <img className='img-fluid product-img' src={product.imgUrl} alt={product.productName} />
                                        </div>
                                        <div>
                                            <p className="fs-5 fw-bold mt-3 text-black">{product.productName}</p>
                                        </div>
                                    </Link>
                                    <div className='text-warning ratings'>
                                        <FontAwesomeIcon className='g-col-6' icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                    <div className='d-flex justify-content-between mt-4 lh-lg'>
                                        <p className='fs-2  fw-semibold'>$ {product.price}</p>
                                        <button className='btn border rounded-circle addBtn' onClick={() => { handleAdd(product) }}>+</button>
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