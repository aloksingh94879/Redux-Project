import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Products from './pages/Products'
import Pnf from './pages/Pnf'
import Menu from './component/Menu'
import { ToastContainer } from 'react-toastify'
import ProductDetails from './component/ProductDetails'

function App() {
  return (
    <BrowserRouter>
    <Menu/>
    <ToastContainer autoClose={3000} position='top-right'/>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/cart'} element={<Cart/>}/>
      <Route path={'/login'} element={<Login/>}/>
      <Route path={'/register'} element={<Register/>}/>
      <Route path={'/products'} element={<Products/>}/>
      <Route path={'/products/:id'} element={<ProductDetails/>}/>
      <Route path={'/*'} element={<Pnf/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
