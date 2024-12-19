import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import  {fetchProducts} from '../Actions/ProductAction'
import { useCallback,useEffect } from 'react'

function ProductDetails() {
  let params=useParams()

  const dispatch = useDispatch()

  const readInit =useCallback(()=>{
    dispatch(fetchProducts())
  },[])

 useEffect(()=>{
    readInit()
  },[readInit])

  // reading all products from redux
  let products=useSelector(item=>item.output)

  // seperating single product which matches the id
  let single=products.find(item=>item.id == params.id)
  return (
    <div className='container'>
      <div className="row mt-4">
        <div className="col-md-4">
         <div className="card border-0">
          <img src={single?.thumbnail} alt="" className='card-img-top'/>

          <div className="card-footer d-flex justify-content-around">
            <button className="btn btn-block btn-warning">
              <i className="bi bi-cart"></i>  Add to cart
            </button>

            <button className="btn btn-block btn-danger">
              <i className="bi bi-coin"></i>  Buy now
            </button>
          </div>
         </div>
        </div>
        <div className="col-md-8">
          <div className="badge bg-info" >{single?.brand}</div>
          <h6 className="display-6 text-dark">{single?.title} {params.id}</h6>

          <div className="badge bg-secondary mt-2"> 
            <strong className='text-white'>{single?.discountPercentage}</strong>
          </div>

          <div className="price mt-2">
            <h3 className='text-success'>&#8377;{single?.price}
              <s className="text-secondary">  
                {single?.price*(single?.discountPercentage/100) + single?.price}</s>
            </h3>
          </div>

          <div className="mt-2 shipping">
            <p className="text-warning">{single?.shippingInformation}</p>
          </div>
          <hr />

          <ul className="list-group border-0">
            <li className="list-group border-0">
              <strong className="text-secondary">Minimum order quantity</strong>
              <span className="text-dark float-end">{single?.minimumOrderQuantity}</span>
            </li>

            <li className="list-group border-0 mt-2">
              <strong className="text-secondary">Availability</strong>
              <span className="text-dark float-end">{single?.availabilityStatus}</span>
            </li>

            <li className="list-group border-0 mt-2">
              <strong className="text-secondary">Category</strong>
              <span className="text-dark float-end">{single?.category}</span>
            </li>

            <li className="list-group border-0 mt-2">
              <strong className="text-secondary">Stock</strong>
              <span className="text-dark float-end">{single?.stock}</span>
            </li>

            <li className="list-group border-0 mt-2">
              <strong className="text-secondary">S.K.U</strong>
              <span className="text-dark float-end">{single?.sku}</span>
            </li>

            <li className="list-group border-0 mt-2">
              <strong className="text-secondary">Tags</strong>
              <span className="text-dark float-end">{single?.tags.join(',')}</span>
            </li>

            <li className="list-group border-0 mt-2">
              <strong className="text-secondary">Stock</strong>
              <span className="text-dark float-end">{single?.stock}</span>
            </li>

            <li className="list-group border-0 mt-2">
              <strong className="text-secondary">Warrant info</strong>
              <span className="text-dark float-end">{single?.warrantyInformation}</span>
            </li>

            <li className="list-group border-0 mt-2">
              <strong className="text-secondary">Return Policy</strong>
              <span className="text-dark float-end">{single?.returnPolicy}</span>
            </li>

            <li className="list-group border-0 mt-2">
              <strong className="text-secondary">Rating</strong>
              <span className="text-dark float-end">{single?.rating}</span>
            </li>

            <li className="list-group border-0 mt-2">
              <strong className="text-secondary">Dimensions</strong>
              <span className="text-dark float-end">width{single?.dimensions?.width}  ,height:{single?.dimensions?.height} &   {single?.dimensions?.depth}</span>
            </li>
          </ul>

          <hr />
          <div className="text-secondary">Reviews</div>

           <ul className="list-group mt-2">
            {
              single?.reviews.map((item,index)=>{
                return(
                  <li className="list-group-item" key={index}>
                    <p>
                      <span className="badge bg-success">{item?.rating}</span>
                      <span className="badge bg-success">{item?.comment}</span>
                    </p>

                    <p className="mt-2">
                      <small className="text-secondary">{item?.reviewerName}</small>
                      <small className="text-secondary ms-3">{item?.reviewerEmail}</small>
                      <small className="float-end">{new Date(item?.date).toLocaleString()}</small>
                    </p>
                  </li>
                )
              })
            }
           </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
