import React, { useEffect, useState } from 'react';
import { userLogin,userFormData } from 'store/actions/machineAction';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';

import './Login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function UserLoginPage(props) {
  const [validated, setValidated] = useState(false);
  const machineGlobalState = useSelector(s => s.machineReducerState);
  const { userName,password,loginResponse } = machineGlobalState;

  const dispatch = useDispatch();

  useEffect(() => {
    
   let getUserStatus =  localStorage.getItem('userData');
   console.log("getUserStatus",JSON.parse(getUserStatus) );
   if(getUserStatus)
   {
     props.history.push('/dashboard')
   }
  }, []);

  // Submit Action
  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else
    {
      event.preventDefault();
      event.stopPropagation();
      console.log(userName,password);
      dispatch(userLogin({ username:userName,password:password }));
    }
    setValidated(true);
  };


  return (
    <Container>
      <div class="login-section">
        <Row>
          <Col lg={12}>
            < Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control  onChange={(e) => dispatch(userFormData({ userName: e.target.value }))} required type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={(e) => dispatch(userFormData({ password: e.target.value }))} required type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
                </Button>
                  <p>{loginResponse}</p>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  )

}

export default withRouter(UserLoginPage);

