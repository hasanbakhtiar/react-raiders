import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home.tsx';
import Header from './layout/Header.tsx';
import Footer from './layout/Footer.tsx';
import Products from './pages/Products.tsx';
import ProductDetails from './pages/ProductDetails.tsx';
import Login from './pages/auth/Login.tsx';
import Register from './pages/auth/Register.tsx';
import Account from './pages/auth/Account.tsx';


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
          <Route path="/register" element={<Register />}></Route>
                    <Route path="/account/:id" element={<Account />}></Route>

          // auth end
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
