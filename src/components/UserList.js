import React, {useEffect, useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {caller} from "../services/caller";
const UserList = () => {

    //functions to setstate and update the inputs
    const [state, setState] = useState({
        users: []
    })

    useEffect(() => {
        caller.getUsers().then( (response) =>
            setState({...state, users: response.data})
        ).catch((e)=>{
            e.error()
        })
    }, []);

    return (
        <Container>
            {JSON.stringify(state.users)}

        </Container>
    );

};

export default UserList;
