import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { saveProduct } from "../services/ProductService";

export function AddProduct() {
    const [formData, setFormData] = useState({});
    const [isInserted, setIsInserted] = useState(false);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await saveProduct(formData);
        console.log(response.data);
        if (response.status == 201) {
            setIsInserted(true);
            setTimeout(() => {
                setIsInserted(false);  
            }, 2000);
        }
    }
    return (
        <>
            <Container className="mt-5 text-center">
                <Alert>Add a new product</Alert>
            </Container>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Id</Form.Label>
                                <Form.Control type="text" name="pid" placeholder="Enter id" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" placeholder="Enter name" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" name="description" placeholder="Enter description" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                        <Col lg={6}>
                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="text" name="price" placeholder="Enter price" onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button type="submit" variant="success">Add Product</Button>
                </Form>
            </Container>
            {
                isInserted ? <Container className="mt-5">
                    <Row>
                        <Col lg={4}>
                            <Alert variant='success'>Product Added Successfully...!</Alert>
                        </Col>
                    </Row>
                </Container> : null
            }

        </>
    );
}