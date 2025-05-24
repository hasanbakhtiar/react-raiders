// import axios from 'axios';
import axios from 'axios';
import { useState, useRef } from 'react';
import { Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Register = () => {
  const [error, setError] = useState("");
  const nameRef = useRef<HTMLInputElement | null>(null);
  const surnameRef = useRef<HTMLInputElement | null>(null);
  const phoneRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passRef = useRef<HTMLInputElement | null>(null);
  const formSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    axios.post('http://localhost:3010/register', {
      "name": nameRef.current!.value,
      "surname": surnameRef.current!.value,
      "phone": phoneRef.current!.value,
      "email": emailRef.current!.value,
      "password": passRef.current!.value
    }, {
      headers: {
        "matrix-access": "3fa3afc2aa0e5e2c1c17ee83f4c8fc76"
      }
    })
      .then(res => console.log(res))
      .catch(err => setError(err.response.data.az))
    if (error) {
      alert(error);
    }
  }

  return (
    <Container>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1 className='my-5'>Register Page</h1>
        <Col sm={12} md={5} >
          <Form onSubmit={formSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" ref={nameRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Surname</Form.Label>
              <Form.Control type="text" ref={surnameRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="phone" ref={phoneRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" ref={emailRef} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passRef} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>

      </div>
    </Container>
  )
}

export default Register
