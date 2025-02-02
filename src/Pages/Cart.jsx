import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Redux/CartSlice'
const Cart = () => {
    const cartData = useSelector(state => state.cart)
    console.log(cartData)
    const dispatch = useDispatch()
    const handleRemove = (product)=>{
        dispatch(remove(product))
    }
    return (
        <>
            {/* <div className="container mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="card border-0 bg-white shadow p-3" style={{ width: "60%" }}>
                        <div className="col">
                            <p className='fw-bold'>No Iterm are added in cart</p>
                        </div>
                    </div>
                    <div className="card border-0 bg-white shadow ms-5 p-3" style={{ width: "25%" }}>
                        <div className="col">
                            <p className='fw-bold'>Cart Summary</p>
                            <hr />
                            <p>Total Price :</p>
                            <p>$0.00</p>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-8 mb-4">
                        {
                            cartData && cartData.length > 0 && cartData.map((product) => (
                                <div className="card md-3 border-0 shadow mb-5 p-4" key={product.id}>
                                    <div className="row ">
                                        <div className="col">
                                            <img src={product.imgUrl} alt={product.productName} className='img-fluid rounded-start' width={200} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className='card-title'>{product.productName}</h5>
                                                <p className='card-text'>
                                                    <small className='text-muted'>
                                                        {product.price} * 1 {product.price * 1}
                                                    </small>
                                                </p>

                                            </div>
                                        </div>
                                        <div className="col">
                                            <button className='btn' onClick={()=>{
                                                handleRemove(product)
                                            }}><FontAwesomeIcon icon={faClose}/></button>
                                            <div>
                                                <button className='btn border'>+</button>
                                                <button className='btn border'>-</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='col-md-4'>
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