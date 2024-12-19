import React from 'react'
import { NavLink } from 'react-router-dom'

function ProductCart(props) {
    const {id,title,price,thumbnail,stock}=props
  return (
    <div className='col-md-4 col-mg-6 col-sm-6'>
        <div className="card" style={{height:"100%"}}> 
            <img src={thumbnail ? thumbnail : ""} alt="" className='card-img-top' />
            <div className="card-body" >
                <h5>{title}</h5>
                <ul className='list-group'>
                    <li className="list-group-item">
                        <strong>price</strong>
                        <span className='float-end text-success'>&#8377;{price}</span>
                    </li>
                    <li className="list-group-item">
                    <strong>stock</strong>
                    <span className='float-end text-success'>{stock}</span>
                    </li>
                </ul>
            </div>
            <div className="card-footer d-flex justify-content-between">
                <button className='btn btn-success'>
                    <i className='bi bi-cart'></i>
                </button>

                <NavLink to={`/products/${id}`} className="btn btn-info">
                <i className="bi bi-info">
                    </i></NavLink>
           
            </div>
        </div>
      
    </div>
  )
}

export default ProductCart
