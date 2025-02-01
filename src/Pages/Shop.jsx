import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Shop.css'
import { products } from '../Products'
import { AiOutlineHeart } from 'react-icons/ai';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const Shop = () => {
  const [dropdownName, updateDropDown] = useState('Filter By Category')
  const [filteredData, updateFilteredData] = useState(products)
  const [searchText, updateSearchText] = useState('')
  const [message, updateMessage] = useState('')
  const filterProducts = (category, searchText = '') => {
    updateDropDown(category)
    if (!category && !searchText) {
      updateFilteredData(products)
      return
    }
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
      updateMessage("Products not found")
    }
    else {
      updateMessage("")
    }
  }, [filteredData])
  return (
    <>
      <div className="container-fluid bg-secondary w-100 p-5">
        <h1 className='text-white text-center p-3'>Products</h1>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col">
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
              <input className="form-control me-2 rounded-pill" type="search" value={searchText} onChange={(e) => {
                updateSearchText(e.target.value)
                filterProducts(dropdownName, e.target.value)
              }} placeholder="Search" aria-label="Search" />
              <button className="btn searchBtn" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
            </form>
          </div>
        </div>
      </div>
      <div className='noProdMsg d-flex justify-content-around'>
        {message && <h2 className='noProductFound'>{message}</h2>}
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center mt-5 mb-5 gap-4" >
          {
            filteredData && filteredData.length > 0 && filteredData.map((product) => (
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
                        <button className='btn border rounded-circle'>+</button>
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

export default Shop