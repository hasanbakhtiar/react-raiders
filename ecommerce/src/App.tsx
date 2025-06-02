import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Container} from 'react-bootstrap'
import Home from './pages/Home.tsx';
import Header from './layout/Header.tsx';
import Footer from './layout/Footer.tsx';
import Products from './pages/Products.tsx';
import ProductDetails from './pages/ProductDetails.tsx';
import Login from './pages/auth/Login.tsx';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route> 
        // auth start
        <Route path="/login" element={<Login />}></Route> 
        // auth end
      </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
