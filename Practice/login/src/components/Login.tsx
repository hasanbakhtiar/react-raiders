// import axios from 'axios';
import axios from 'axios';
import { useState, useRef } from 'react';
import { Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    const [error, setError] = useState("");
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passRef = useRef<HTMLInputElement | null>(null);
    const formSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        axios.post('http://localhost:3010/auth', {
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
                <h1 className='my-5'>Login Page</h1>
                <Col sm={12} md={5} >
                    <Form onSubmit={formSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" ref={passRef} />
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

export default Login
