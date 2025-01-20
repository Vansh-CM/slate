

import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Deshboard from './pages/Deshboard'
import MyComponent from './components/MyComponent'
import LoginForm from './components/auth/LoginForm'
import RagistorUser from './components/auth/RagistorUser'
import UserList from './components/auth/UserList'
import SignatureCanvas from './components/SignatureCanvas'

const App = () => {
  const [signature, setSignature] = useState(null);

  const handleSaveSignature = (dataURL) => {
    setSignature(dataURL);
    console.log('Signature saved:', dataURL);
  };
  return (
    <Routes>
      <Route path='/dashboard' element={<Deshboard />} />
      <Route path='/settings' element={<MyComponent />} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='/signup' element={<RagistorUser />} />
      <Route path='/list' element={<UserList />} />
      <Route path='/signature' element={<SignatureCanvas  onSave={handleSaveSignature} />} />
    {/* <Route path="/" element={<Home />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/product/:productId' element={<Product />} />
    <Route path='/cart' element={<Cart />} />
    <Route path='/login' element={<Login />} />
    <Route path='/place-order' element={<PlaceOrder />} />
    <Route path='/orders' element={<Orders />} /> */}
  </Routes>
  )
}

export default App