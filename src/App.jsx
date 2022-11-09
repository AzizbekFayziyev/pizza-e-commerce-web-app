import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import Products from './components/products/Products';
import SelectedProduct from './components/products/SelectedProduct';
import { productCartFetching } from './redux/actions/action';
import 'bootstrap/dist/js/bootstrap.min.js';

export default function App() {
  // Get cart products from localStorage
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productCartFetching());

    // RE:PLAIN config
    window.replainSettings = { id: 'befd929e-ef98-4551-a729-b8227047631d' };
    (function (u) {
      var s = document.createElement('script'); s.async = true; s.src = u;
      var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })('https://widget.replain.cc/dist/client.js');
  }, [])

  // Components
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path='/' element={<Products />} />
        <Route path='/product/:id' element={<SelectedProduct />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}
