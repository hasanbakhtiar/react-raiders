import { useEffect } from 'react'
import axios from 'axios';

const Products: React.FC = () => {
  useEffect(() => {
    axios.get('http://localhost:3010/slider', {
      headers: {
        "matrix-access": "3fa3afc2aa0e5e2c1c17ee83f4c8fc76"
      }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err)
      );

  }, [])

  return (
    <div>Products</div>
  )
}

export default Products
