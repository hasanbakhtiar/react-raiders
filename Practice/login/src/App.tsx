import AddProduct from "./components/AddProduct.tsx";
import Login from "./components/Login"
import Products from './components/Products.tsx';
import Register from "./components/Register.tsx";
const App = () => {
  return (
    <div>
      <AddProduct />
      <Products />
      <Register />
      <Login />
    </div>
  )
}

export default App
