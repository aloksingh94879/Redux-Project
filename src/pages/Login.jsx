import React, { useState } from "react";
import { toast } from "react-toastify";

function Login() {

  const [user,setUser]=useState({
    email:"",
    pass:""
  })

  const readValue=(e)=>{
    const {name,value}=e.target
    setUser({...user,[name]:value})
}

const submitHandler=async(e)=>{
  e.preventDefault()
  try {
    console.log(`user=`,user)
  } catch (err) {
    toast.error(err.message)
  }
}
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-center">Login</h3>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <form autoComplete="off" onSubmit={submitHandler}>
                <div className="form-group mt-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={readValue}
                    className="form-control"
                  />
                </div>

                <div className="form-group mt-2">
                  <label htmlFor="pass">Password</label>
                  <input
                    type="password"
                    name="pass"
                    id="pass"
                    onChange={readValue}
                    className="form-control"
                  />
                </div>

                <div className="form-group mt-2">
                  <input type="submit" value="login" className="btn btn-dark" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

