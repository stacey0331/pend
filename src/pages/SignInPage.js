import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignInPage() {
    return (
        <Form>
            <div className="Page-title" style={{textAlign: 'center'}}>Sign In</div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group style={{textAlign: 'center'}}>
            <Button variant="primary" type="submit">
            Sign In
            </Button> <br/><br/>
            New User? <a href="/create-account">Create an account</a>
        </Form.Group>
      </Form>
    );
}
export default SignInPage;