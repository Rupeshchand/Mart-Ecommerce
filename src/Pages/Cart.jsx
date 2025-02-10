import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect, useContext } from 'react'
import '../Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../Redux/CartSlice'
import { context } from '../Components/ContextProvider'
const Cart = () => {
    const cartData = useSelector(state => state.cart)
    console.log(cartData)
    const [noItemMsg, setNoItemMsg] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {
        if (cartData.length === 0) {
            setNoItemMsg("No Items are added in cart")
        }
    }, [cartData])

    const handleAdd = (product) => {
        dispatch(add({
            id: product.id,
            quantity: 1,
            productName: product.productName,
            price: product.price,
            imgUrl: product.imgUrl
        }))

    }
    const handleRemove = (product) => {
        const existingItem = cartData.find((item) => item.id === product.id)
        if(existingItem){
            dispatch(remove(product))
        }
        dispatch(remove({ id: product.id }))
    }
    const totalPrice = cartData.reduce((total, product) => {
        return total + product.price * (product.quantity || 1)
    }, 0)
    return (
        <>
            <div className="container cartContainer mt-5">
                <div className="row">
                    <div className="col-md-8 col-lg-8 col-xxl-8">
                        {
                            cartData && cartData.length > 0 ? (cartData.map((product) => (
                                <div className="card md-3 border-0 shadow mb-4 p-4" key={product.id}>
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <img src={product.imgUrl} alt={product.productName} className='img rounded-start' width={150} />
                                        </div>
                                        <div className="col-md-8 w-auto">
                                            <div className="card-body">
                                                <h5 className='card-title'>{product.productName}</h5>
                                                <p className='card-text'>
                                                    <span className='text-muted'>
                                                        $ {product.price} * {product.quantity || 1} <span className='ms-3 fw-bold' style={{ color: "#003153" }}>$ {product.price * product.quantity || 1}</span>
                                                    </span>
                                                </p>

                                            </div>
                                        </div>
                                        <div className="col w-auto">
                                            <button className='btn remove' onClick={() => {
                                                handleRemove(product)
                                            }}><FontAwesomeIcon icon={faClose} /></button>
                                            <div className='addMinusBtns'>
                                                <button className='btn border me-2' onClick={() => { handleAdd(product) }}
                                                // onClick={() => {hand
                                                //     // if(!quantity[product.id]){
                                                //     //     updateCount(count++)
                                                //     // }
                                                //     // updateQuantity({
                                                //     //     ...quantity,
                                                //     //     [product.id] : (quantity[product.id] || 1)+1
                                                //     // })
                                                // }}
                                                >+</button>
                                                <button className='btn border' onClick={() => { handleRemove(product) }}
                                                // updateQuantity(quantity - 1)
                                                // updateCount(count - 1)
                                                // if (quantity === 1) {
                                                //     handleRemove(product)
                                                // }
                                                >-</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))) : <div className="container mb-5">
                                <div className="row justify-content-center">
                                    <div className="card border-0 bg-white shadow p-3" style={{ width: "95%", height: "150px" }}>
                                        <div className="col">
                                            <p className='fw-bold'>{noItemMsg}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className='col-md-4 col-lg-4 col-xxl-4 mb-5'>
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <h5 className='card-title'>Cart Summary</h5>
                                <hr></hr>
                                <p className='card-text'>Total Price:</p>
                                <p className='price fs-4 fw-bold'>₹ {totalPrice}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Cart