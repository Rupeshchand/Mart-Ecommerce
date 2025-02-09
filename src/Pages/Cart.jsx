import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect, useContext } from 'react'
import '../Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Redux/CartSlice'
import { context } from '../Components/ContextProvider'
import { products } from '../Products'
const Cart = () => {
    const [quantity, updateQuantity] = useState({})
    const cartData = useSelector(state => state.cart)
    const [noItemMsg, setNoItemMsg] = useState('')
    const dispatch = useDispatch()
    useEffect(() => {
        if (cartData.length === 0) {
            setNoItemMsg("No Items are added in cart")
        }
    }, [cartData])
    let { count, updateCount } = useContext(context)
    const handleRemove = (product) => {
        dispatch(remove(product))
        updateCount(count - 1)
    }
    const totalPrice = cartData.reduce((total,product) =>{
        return total + product.price * (quantity[product.id] || 1)
    },0)
    return (
        <>
            <div className="container cartContainer mt-4">
                <div className="row">
                    <div className="col-md-8 col-lg-8 col-xxl-8">
                        {
                            cartData && cartData.length > 0 ? (cartData.map((product) => (
                                <div className="card md-3 border-0 shadow mb-4 p-3" key={product.id}>
                                    <div className="row align-items-center">
                                         <div className="col">
                                            <img src={product.imgUrl} alt={product.productName} className='img rounded-start' width={150} />
                                        </div>
                                        <div className="col-md-8 w-auto">
                                            <div className="card-body">
                                                <h5 className='card-title'>{product.productName}</h5>
                                                <p className='card-text'>
                                                    <p className='text-muted'>
                                                        $ {product.price} * {quantity[product.id] || 1} <span className='ms-3 fw-bold' style={{color:"#003153"}}>$ {product.price * quantity[product.id] || 1}</span>
                                                    </p>
                                                </p>

                                            </div>
                                        </div>
                                        <div className="col w-auto">
                                            <button className='btn remove' onClick={() => {
                                                handleRemove(product)
                                            }}><FontAwesomeIcon icon={faClose} /></button>
                                            <div className='addMinusBtns'>
                                                <button className='btn border me-2' onClick={() => {
                                                    if(!quantity[product.id]){
                                                        updateCount(count++)
                                                    }
                                                    updateQuantity({
                                                        ...quantity,
                                                        [product.id] : (quantity[product.id] || 1)+1
                                                    })
                                                }}>+</button>
                                                <button className='btn border' onClick={() => {
                                                    if((quantity[product.id] || 1)>1){
                                                        updateQuantity({
                                                            ...quantity,
                                                            [product.id] : quantity[product.id] -1
                                                        })
                                                    }
                                                    else{
                                                        handleRemove(product)
                                                    }
                                                    // updateQuantity(quantity - 1)
                                                    // updateCount(count - 1)
                                                    // if (quantity === 1) {
                                                    //     handleRemove(product)
                                                    // }
                                                }}>-</button>
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