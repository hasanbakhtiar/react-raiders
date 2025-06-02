import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Header from './layout/Header.tsx';
import Footer from './layout/Footer.tsx';
import Home from './pages/Home.tsx';
import Product from './pages/Product.tsx';

const App:React.FC = () => {
  return (
    <BrowserRouter>
    <Header />
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/product" element={<Product/>}></Route>
          </Routes>
          <Footer/>
    </BrowserRouter>
  )
}

export default App
