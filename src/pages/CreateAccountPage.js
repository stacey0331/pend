import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";
import Axios from 'axios';

function CreateAccount() {
    const [usernameReg, setUsername] = useState("");
    const [passwordReg, setPassword] = useState("");
    const [first_name, setFirst] = useState("");
    const [last_name, setLast] = useState("");

    const create = () => {
        Axios.post('http://localhost:3001/create', {
            username: usernameReg, 
            password: passwordReg,
            first_name: first_name,
            last_name: last_name,
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <>
            <div className="Page-title">Create Account</div>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control placeholder="" onChange={(e) => {setFirst(e.target.value);}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control placeholder="" onChange={(e) => {setLast(e.target.value);}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" onChange={(e) => {setUsername(e.target.value);}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value);}}/>
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group> */}
                <Button variant="primary" type="submit" onClick={create}>
                    Create Account
                </Button>
            </Form>
        </>
    );
}

export default CreateAccount;