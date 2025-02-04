import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState,useEffect, useContext } from 'react'
import '../Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Redux/CartSlice'
import { context } from '../Components/ContextProvider'
const Cart = () => {
    const [quantity,updateQuantity] = useState(1)
    const cartData = useSelector(state => state.cart)
    console.log(cartData)
    const [noItemMsg,setNoItemMsg] = useState('')
    const dispatch = useDispatch()
    useEffect(()=>{
        if(cartData.length === 0){
            setNoItemMsg("No Items are added in cart")
        }
    },[cartData])
    const {count,updateCount} = useContext(context)
    const handleRemove = (product) => {
        dispatch(remove(product))
        updateCount(count-1)
    }
    
    return (
        <>
            <div className="container cartContainer mt-4">
                <div className="row">
                    <div className="col-md-8 mb-4 mt-5 ">
                        {
                            cartData && cartData.length > 0 ? (cartData.map((product) => (
                                <div className="card md-3 border-0 shadow mb-4 p-5" key={product.id}>
                                    <div className="row ">
                                        <div className="col">
                                            <img src={product.imgUrl} alt={product.productName} className='img-fluid rounded-start' width={300} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className='card-title'>{product.productName}</h5>
                                                <p className='card-text'>
                                                    <small className='text-muted'>
                                                        {product.price} * {quantity} <span>{product.price * quantity}</span>
                                                    </small>
                                                </p>

                                            </div>
                                        </div>
                                        <div className="col">
                                            <button className='btn remove' onClick={() => {
                                                handleRemove(product)
                                            }}><FontAwesomeIcon icon={faClose} /></button>
                                            <div className='addMinusBtns'>
                                                <button className='btn border me-2' onClick={()=>{
                                                    updateQuantity(quantity+1)
                                                    updateCount(count+1)
                                                }}>+</button>
                                                <button className='btn border' onClick={()=>{
                                                    updateQuantity(quantity-1)
                                                    updateCount(count-1)
                                                    if(quantity === 1){
                                                        handleRemove(product)   
                                                    }
                                                }}>-</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))) : <div className="container mb-5">
                                <div className="row justify-content-center">
                                    <div className="card border-0 bg-white shadow p-3" style={{ width: "95%", height:"150px" }}>
                                        <div className="col">
                                            <p className='fw-bold'>{noItemMsg}</p>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        }
                    </div>
                    <div className='col-md-4 mt-5 mb-5'>
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <h5 className='card-title'>Cart Summary</h5>
                                <p className='card-text'>Total Price: </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Cart