import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import Products from "./pages/shop/Products";
import ProductDetails from "./pages/shop/ProductDetails";
import Cart from "./pages/shop/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/shop" element={<Products />}></Route>
          <Route path="/products/:slug" element={<ProductDetails />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
