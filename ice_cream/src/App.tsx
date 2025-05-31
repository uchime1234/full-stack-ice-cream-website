// filepath: src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Orderpage from './pages/orderpage'
import ConfirmCartPayment from './pages/confirm_payment'
import Register from './pages/register'
import Login from './pages/login'
import IceCreamForm from './pages/sendicecream'
import Vendorsign from './pages/vendor_sign_up'
import Vendorpage from './pages/vendors-page'



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/orderpage" element={<Orderpage />} />
      <Route path="/confrim" element={<ConfirmCartPayment />} />
      <Route path="/sendice" element={<IceCreamForm />} />
      <Route path="/vendorsign" element={<Vendorsign />} />
      <Route path="/vendorpage" element={<Vendorpage />} />
    </Routes>
  )
}

export default App