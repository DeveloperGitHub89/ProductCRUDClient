import { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import { deleteProduct, fetchAllProducts } from "../services/ProductService";
export function ProductsList() {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        const response = await fetchAllProducts();
        setProducts(response.data);
    }
    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <>
            <Container className="mt-5 text-center">
                <Alert>
                    Products List
                </Alert>
            </Container>
            <Container>
                <Row>
                    {
                        products.map((product) => {
                            return (
                                <Col lg={4} className='mt-4'>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>{product.name} #{product.pid}</Card.Title>
                                            <Card.Text>
                                                {product.description}
                                                <h3 className="mt-3">&#8377;{product.price}</h3>
                                            </Card.Text>
                                            <Button variant="danger" className="btn-sm" onClick={async()=>{
                                                await deleteProduct(product._id);
                                                fetchProducts()
                                            }}>Remove</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    );
}