import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
import Axios from 'axios';

function SignInPage() {

    const [username, logUsername] = useState("");
    const [password, logPassword] = useState("");

    const login = () => {
      Axios.post('http://localhost:3001/login', {
          username: username, 
          password: password,
      }).then((response) => {
          console.log(response);
      });
    };

    return (
        <Form>
            <div className="Page-title" style={{textAlign: 'center'}}>Sign In</div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={(e) => {logUsername(e.target.value);}}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => {logPassword(e.target.value);}}/>
        </Form.Group>
        <Form.Group style={{textAlign: 'center'}}>
            <Button variant="primary" type="submit" onClick={login}>
            Sign In
            </Button> <br/><br/>
            New User? <a href="/create-account">Create an account</a>
        </Form.Group>
      </Form>
    );
}
export default SignInPage;