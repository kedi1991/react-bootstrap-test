import React, { useState } from 'react';
import {Button, Card, Col, Container, Navbar, Row} from "react-bootstrap";

const MyNavBar = () => {
    let [state, setState] = useState({
        count:0
    });


    //functions for the increment
    let increment = () => {
        setState({
            count: state.count +1
        })
    }

    //function to decrease
    let decrease = () => {
        setState({
            count: state.count -1
        })
    }

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
                    <Card style={{ width: '18rem' }} border={"primary"}>
                        <Card.Body>
                            <Card.Title>{state.count}</Card.Title>
                            <Card.Text>
                                Number
                            </Card.Text>
                            <Button onClick={increment} variant="primary">Increase</Button>{' '}
                            <Button onClick={decrease} variant="secondary">Decrease</Button>{' '}
                        </Card.Body>
                    </Card>
                </Col>

            </Row>


        </Container>
            );
};

export default MyNavBar;
