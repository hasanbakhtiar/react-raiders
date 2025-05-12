// import axios from 'axios';
import axios from 'axios';
import { useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
    const [error, setError] = useState("");
    const formSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        axios.post('#', {
            "email": "#",
            "password": "#"
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
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
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