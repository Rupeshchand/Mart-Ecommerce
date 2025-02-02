import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../Products'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import '../ProductDetails.css'
import { useDispatch } from 'react-redux';
import { add } from '../Redux/CartSlice';
const ProductDetails = () => {
    const [product, setProduct] = useState({})
    // const [desc, updateDesc] = useState('')
    const [reviews, updateReviews] = useState('')
    const [relatedProducts, updateRelatedProducts] = useState([])
    const [added, setAdded] = useState(false)
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
    const handleAdd = (product) => {
        dispatch(add(product))
        setAdded(true)
    }
    return (
        <>
            <div className="container-fluid bg-secondary w-100 p-5">
                <h1 className='text-white text-center p-3'>{product.productName}</h1>
            </div>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col">
                        <img src={product.imgUrl} alt={product.productName} width={500} />
                    </div>
                    <div className="col">
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
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="#">Description</Link></li>
                            {/* <p>{product.description}</p> */}
                    <li className="breadcrumb-item active" aria-current="page">Reviews (2)</li>
                </ol>
            </nav>
            {/* <p>{product.description}</p> */}
            <div className="container">
                <div className="row d-flex justify-content-center mt-5 mb-5 gap-4" >
                    <h2>You May Also Like</h2>
                    {
                        relatedProducts && relatedProducts.length > 0 && relatedProducts.map((product) => (
                            <div className="col-md-3 m-2" key={product.id}>
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

export default ProductDetails 