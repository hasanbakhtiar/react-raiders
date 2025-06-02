import { useContext } from 'react';
import { useQuery } from 'react-query';
import { BaseUrlContext } from '../context/BaseUrlContext.tsx';
import axios from 'axios';

const Product = () => {
  const [baseUrl, header] = useContext(BaseUrlContext);

  const fetchData = useQuery('product', () => {
    return axios.get(`${baseUrl}/product`, header).then((res) => res.data);
  });
  const { data, isLoading, refetch } = fetchData;
  console.log(data);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <button onClick = {()=>{refetch()}}>refresh</button>
      {data.map((item) => (
        <li key={item._id}>{item.titleAz}</li>
      ))}
    </div>
  );
};

export default Product;
