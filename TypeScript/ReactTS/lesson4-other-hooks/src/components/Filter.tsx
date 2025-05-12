import axios from "axios";
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom";


interface productType {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}


const Filter: React.FC = () => {
  const {cat} = useParams();
  const [category, setCategory] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(cat);
  const [products, setProducts] = useState<productType[]>([]);
  useEffect(() => {
  if (!cat) {
    axios.get('https://fakestoreapi.com/products/categories')
    .then(res => setCategory(res.data));

  axios.get(`https://fakestoreapi.com/products`)
    .then((res) => setProducts(res.data));
  }else{
    axios.get('https://fakestoreapi.com/products/categories')
    .then(res => setCategory(res.data));

  axios.get(`https://fakestoreapi.com/products/category/${selectedCategory}`)
    .then((res) => setProducts(res.data));
  }
  }, [selectedCategory]);

  return (
    <Container className="mt-5">
      <Row>
        <Col sm="3">
          <ul className="list-group">
            {category.map((item: string) => (
              <Link to={`/${item}`} onClick={() => { setSelectedCategory(item) }} key={item} className="list-group-item">{item}</Link>
            ))}
          </ul>
        </Col>
        <Col sm="9">
          <Row className="g-3">
            {products.map((item: productType) => (
              <Col sm={12} md={4} key={item.id}>
                <div className="card" >
                  <img height={200} style={{objectFit:"contain"}} src={item.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <h6 className="card-title">${item.price}</h6>
                  </div>
                </div>
              </Col>
            ))}

          </Row>

        </Col>
      </Row>
    </Container>
  )
}

export default Filter