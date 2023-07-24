
import React from 'react';
import Products from './components/Products';
import Dashboard from './components/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart';



function App() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route  path="/"  element={<Products />}/> 
        <Route  path="/cart"  element={<Cart />}/> 
      </Routes>
    </BrowserRouter> 
    </>
  );
}

export default App;
