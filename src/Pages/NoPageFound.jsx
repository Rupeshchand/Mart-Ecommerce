import React from 'react'
import img from "../Images/404-1.png"

const NoPageFound = () => {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center' style={{height:"80vh"}}>
                <img className="" src={img} alt={"404Page"} style={{width:"1440px",height:"535px"}}/>
            </div>
        </>
    )
}

export default NoPageFound