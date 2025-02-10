import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Shop.css'
import { products } from '../Products'
import { AiOutlineHeart } from 'react-icons/ai';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux'
import { add } from '../Redux/CartSlice'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { context } from '../Components/ContextProvider'
import banner from "../Images/banner.jpg"
const Shop = () => {
  const [dropdownName, updateDropDown] = useState('Filter By Category')
  const [filteredData, updateFilteredData] = useState(products)
  console.log(filteredData)
  const [searchText, updateSearchText] = useState('')
  const [npProdMessage, updateMessage] = useState('')
  const filterProducts = (category, searchText = '') => {
    updateDropDown(category)
    // if (!category && !searchText) {
    //   updateFilteredData(products)
    //   console.log(products)
    //   return
    // }
    let res = products.filter((product) => {
      const productMatch = product.category.toLowerCase() === category.toLowerCase()
      const searchMatch = searchText ? product.category.toLowerCase().includes(searchText.toLowerCase()) : false
      return productMatch || searchMatch
    })
    updateFilteredData(res)
    return res
  }
  useEffect(() => {
    if (filteredData.length === 0) {
      updateMessage("No Product Found")
    }
    else {
      updateMessage("")
    }
  }, [filteredData])
  const dispatch = useDispatch()
  const { count, updateCount } = useContext(context)
  const handleAdd = (product) => {
    dispatch(add(product))
    updateCount(count + 1)
    notify()
  }
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
      <div className="container-fluid w-100 shopContainer position-relative">
        <img className='bannerImg img-fluid' src={banner} alt={"banner-image"} style={{width:"100%" ,height:"250px"}}/>
        <h1 className='text-white text-center p-3 position-absolute'>Products</h1>
      </div>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xxl-6 mb-3">
            <div className="dropdown position-relative">
              <Link className="btn btn-secondary filterCat dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {dropdownName}
              </Link>
              {/* <div className='vertical-line text-white'></div> */}
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#" onClick={() => {
                  filterProducts('Sofa', searchText)
                }}>Sofa</Link></li>
                <li><Link className="dropdown-item" to="#" onClick={() => {
                  filterProducts("Chair", searchText)
                }}>Chair</Link></li>
                <li><Link className="dropdown-item" to="#" onClick={() => {
                  filterProducts('Watch', searchText)
                }}>Watch</Link></li>
                <li><Link className="dropdown-item" to="#" onClick={() => {
                  filterProducts('Mobile', searchText)
                }}>Mobile</Link></li>
                <li><Link className="dropdown-item" to="#" onClick={() => {
                  filterProducts("Wireless", searchText)
                }}>Wireless</Link></li>
              </ul>
            </div>
          </div>
          <div className="col">
            <form className="d-flex" role="search position-relative">
              <input className="form-control me-2 rounded-pill" id="roundedPill" type="search" value={searchText} onChange={(e) => {
                updateSearchText(e.target.value)
                filterProducts(dropdownName, e.target.value)
              }} placeholder="Search" aria-label="Search" />
              <button className="btn searchBtn" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
            </form>
          </div>
        </div>
      </div>
      <div className='noProdMsg d-flex justify-content-around mt-5'>
        {npProdMessage && <h2 className='noProductFound'>{npProdMessage}</h2>}
      </div>
      <div className="productsContainer">
        <div className="row d-flex justify-content-center mb-5 gx-4 gy-4">
          {
            filteredData && filteredData.length > 0 && filteredData.map((product) => (
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
      </div >
    </>
  )
}

export default Shop