import React, {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
const MyForm = () => {

    //functions to setstate and update the inputs
    const [state, setState] = useState({
        user: {
            email: "",
            password: ""
        }
    })

    const updateInput = (e) => {
        setState({
            state, user: {
                ...state.user, [e.target.name]: e.target.value
            }
        })

    }

    const submitter = () => {
        console.log(state)
    }

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name={"email"} onChange={updateInput}
                                          placeholder="email address"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name={"password"} onChange={updateInput} placeholder="password"/>
                        </Form.Group>
                        <Button variant="primary" onClick={submitter} type={"submit"}>Primary</Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>

        </Container>
    );

};

export default MyForm;
