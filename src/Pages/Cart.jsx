import React from 'react'

const Cart = () => {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row justify-content-center">
                    <div className="card border-0 bg-white shadow p-3" style={{width : "60%" }}>
                        <div className="col">
                            <p className='fw-bold'>No Iterm are added in cart</p>
                        </div>
                    </div>
                    <div className="card border-0 bg-white shadow ms-5 p-3" style={{width : "25%"}}>
                        <div className="col">
                            <p className='fw-bold'>Cart Summary</p>
                            <hr />
                            <p>Total Price :</p>
                            <p>$0.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart