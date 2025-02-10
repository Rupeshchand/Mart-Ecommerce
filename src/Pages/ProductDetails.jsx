import React, { useContext, useRef } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../Products'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import '../ProductDetails.css'
import { useDispatch } from 'react-redux';
import { add } from '../Redux/CartSlice';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { context } from '../Components/ContextProvider';
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
const ProductDetails = () => {
    const [product, setProduct] = useState({})
    const [relatedProducts, updateRelatedProducts] = useState([])
    const [added, setAdded] = useState(false)
    const [descriptionColor, setDescriptionColor] = useState('gray')
    const [reviewsColor, setReviewsColor] = useState('gray')
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        const foundProduct = products.find((p) => p.id === id)
        const relatedProduct = products.filter((relatedPrdct) => {
            return relatedPrdct.category.includes(product.category)
        })
        setProduct(foundProduct)
        updateRelatedProducts(relatedProduct)
    }, [id, products, product.category])
    const { count, updateCount } = useContext(context)
    const handleAdd = (product) => {
        dispatch(add({
            id: product.id,
            quantity: 1,
            productName: product.productName,
            price: product.price,
            imgUrl: product.imgUrl
        }))
        setAdded(true)
        updateCount(count + 1)
        notify()
    }
    let ele = useRef(null)
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
            <div className="container-fluid pdContainer bg-secondary w-100">
                <h1 className='text-white text-center p-3'>{product.productName}</h1>
            </div>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 col-lg-6 col-xxl-6">
                        <img className="img-fluid" src={product.imgUrl} alt={product.productName} width={500} />
                    </div>
                    <div className="col-md-6 col-lg-6 col-xxl-6">
                        <h1>{product.productName}</h1>
                        <div className='row aliggn-items-center'>
                            <div className='col text-warning ratings'>
                                <FontAwesomeIcon className='g-col-6' icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            {
                                product.rating && (
                                    <p>{product.rating} ratings</p>
                                )
                            }
                        </div>
                        <div className='d-flex mt-4 align-items-center justify-content-start gap-5'>
                            <p className='fs-2  fw-semibold'>$ {product.price}</p>
                            <p className='category'>Category: {product.category}</p>
                        </div>
                        <div>
                            <p>{product.shortDesc}</p>
                        </div>
                        <button className='btn pdBtn' onClick={() => { handleAdd(product) }}>{added ? 'Added' : 'Add to cart'}</button>
                    </div>
                </div>
            </div >
            {/* style={{ marginLeft: "75px", width: "fit-content", paddingTop: "25px" }} */}
            <div style={{ marginLeft: "34px", marginTop: "20px" }}>
                <button className="btn" onClick={() => { setDescriptionColor('black') }}><Link style={{ color: descriptionColor }} className="text-decoration-none" to="description">Description</Link></button>
                <button className="btn" onClick={() => { setReviewsColor("black") }} onMouseLeave={() => { setReviewsColor('gray') }}><Link style={{ color: reviewsColor }} className="text-decoration-none text-secondary" to="reviews">Reviews (2)</Link></button>
            </div>
            <Outlet />
            <div className="container">
                <div className="row d-flex justify-content-center mb-5 gx-4 gy-4" >
                    <h2>You May Also Like</h2>
                    {
                        relatedProducts && relatedProducts.length > 0 && relatedProducts.map((product) => (
                            <div className="col-md-6 col-lg-4 col-xxl-4 w-auto" key={product.id}>
                                <Link className='text-decoration-none' to={`/product-details/${product.id}`}>
                                    <div className="card p-4 border border-0 bg-white shadow product-cards">
                                        <div>
                                            <AiOutlineHeart className="whishlist" size={20} />
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
                                                <button className='btn border rounded-circle addBtn' onClick={() => { handleAdd(product) }}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export const Description = () => {
    return (
        <>
            <div className='ms-5 row'>
                <p className='text-wrap col-md-12 col-lg-12 col-xxl-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!"
                </p>
            </div>
        </>
    )
}
export const Reviews = () => {
    return (
        <>
            <div className='ms-5 lh-sm'>
                <p className='fw-bold'>Jhon Doe</p>
                <p className='text-warning'>4.8 (rating)</p>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                <p className='fw-bold'>Jhon Doe</p>
                <p className='text-warning'>4.8 (rating)</p>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
            </div>
        </>
    )
}
export default ProductDetails 