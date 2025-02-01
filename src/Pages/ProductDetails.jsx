import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../Products'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import '../ProductDetails.css'
const ProductDetails = () => {
    const [product, setProduct] = useState({})
    const [desc, updateDesc] = useState('')
    const { id } = useParams()
    useEffect(() => {
        const foundProduct = products.find((p) => p.id === id)
        setProduct(foundProduct)
    }, [id, products])
    console.log(product)
    return (
        <>
            <div className="container-fluid bg-secondary w-100 p-5">
                <h1 className='text-white text-center p-3'>{product.productName}</h1>
            </div>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col">
                        <img src={product.imgUrl} alt={product.productName} />
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
                        <button className='btn pdBtn'>Add To Cart</button>
                    </div>
                </div>
            </div >
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p onClick={() => {
                            updateDesc(product.description)
                        }}>Description</p>
                        <p>{desc}</p>
                    </div>
                    <div className="col">
                        <p>Reviews (2)</p>
                        {
                            product.reviews && product.reviews.map((review) => (
                                <>
                                    <p>Jhon Doe</p>
                                    <p className='text-warning'>{review.rating}(rating)</p>
                                    <p>{review.text}</p>
                                </>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails 