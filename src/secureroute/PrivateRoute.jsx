import React from 'react'
import { Navigate,Outlet } from 'react-router-dom'

function PrivateRoute() {

    const context=false;
  return (
    <React.Fragment>
        {
            context ? <Outlet/>:<Navigate to={'/login'}/>
        }
    </React.Fragment>
  )
}

export default PrivateRoute
