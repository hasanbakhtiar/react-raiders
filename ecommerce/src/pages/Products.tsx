import { useEffect, useState, useContext } from 'react';
import { Row } from 'react-bootstrap';
import SingleCard from '../components/SingleCard.tsx';
import {BaseUrlContext} from '../context/BaseUrlContext.tsx';
import axios from 'axios';

const Products = () => {
  const [data, setData] = useState<any[]>([]);
  const [baseUrl, header] = useContext(BaseUrlContext);

  useEffect(() => {
    axios.get(`${baseUrl}/product`,header)
    .then(res=>setData(res.data)
    );
  }, []);

  return (
    <>
      <h1 className="text-center my-5">Products</h1>
      <Row className="g-3">
      {data.map(item=>(
        <SingleCard key={item._id} />

      ))}
      </Row>
    </>
  );
};

export default Products;
