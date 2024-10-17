

import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Deshboard from './pages/Deshboard'
// import MyComponent from './components/MyComponent'
import TextFormattingExample from './pages/TextFormattingExample'
import TextFormattingExample2 from './pages/TextFormattingExample2'

const App = () => {
  return (
    <Routes>
      <Route path='/dashboard' element={<TextFormattingExample />} />
      <Route path='/settings' element={<TextFormattingExample2 />} />
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