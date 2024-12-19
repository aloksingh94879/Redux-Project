import React,{useCallback,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { productCategories } from '../Actions/ProductAction'

function Home() {
  const dispatch = useDispatch()

  const readInit =useCallback(()=>{
    dispatch(productCategories())
  },[])

 useEffect(()=>{
    readInit()
  },[readInit])

  // reading all products from redux
  let categories=useSelector(item=>item.output)
  return (
   <div className="container">
    <div className="row">
      <div className="col-md-12 text-center">
        <h3 className="display-3 text-dark">
          Home
        </h3>
      </div>
    </div>

    <div className="row">
      {
        categories?.map((item,index)=>{
          return(
            <div className="col-md-4 col-sm-6 col-lg-4 mt-2 mb-2" key={index}>
              <div className="card">
                <div className="card-body text-center bg-dark text-white">
                  <h5>{item.id}{item.name}</h5>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
   </div>
  )
}

export default Home
