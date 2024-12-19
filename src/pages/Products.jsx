import React, { useCallback ,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../Actions/ProductAction'
import ProductCart from '../component/ProductCart'

function Products() {

  const dispatch = useDispatch()

  const readInit =useCallback(()=>{
    dispatch(fetchProducts())
  },[])

 useEffect(()=>{
    readInit()
  },[readInit])

// to read state from redux
  let products =useSelector(item=>item.output)

  return (
   <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <h3 className="display-3 text-dark">Products</h3>
      </div>
    </div>

    <div className="row">
      {
        products?.map((item,index)=>{
          return(
            <ProductCart key={index} {...item}/>
          )
        })
      }
    </div>
   </div>
  )
}

export default Products