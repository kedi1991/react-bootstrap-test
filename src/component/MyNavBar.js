import React, { useState } from 'react';
import {Button, Card, Col, Container, Navbar, Row} from "react-bootstrap";

const MyNavBar = () => {
    const [state, setState] = useState(false);
    return (
        <Container>
            <Navbar className="bg-body-tertiary" bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">Mark Otto</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <><br/></>
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Counter</Card.Title>
                            <Card.Text>
                                Number
                            </Card.Text>
                            <Button variant="primary">Primary</Button>{' '}
                            <Button variant="secondary">Secondary</Button>{' '}
                        </Card.Body>
                    </Card>
                </Col>

            </Row>


        </Container>
            );
};

export default MyNavBar;
