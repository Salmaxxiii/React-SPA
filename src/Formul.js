import React, { Component } from "react";
import { Button,Form, FormGroup, FormControl,FormText,FormCheck, ControlLabel } from "react-bootstrap";

class Formul extends Component {
render() {
return (

<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label><br/>
    <Form.Control type="email" placeholder="Enter email" /><br/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <br/>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label><br/>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <br/>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

);
}
}
export default Formul;