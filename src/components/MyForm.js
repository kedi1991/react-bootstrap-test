import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
const MyForm = () => {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="email address" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="email" placeholder="password" />
                        </Form.Group>
                        <Button variant="primary" type={"submit"}>Primary</Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>

        </Container>
    );
};
export default MyForm;
