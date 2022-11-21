import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom'

import { loginAction } from '../acions/SessionAction';

function LoginComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.SessionReducer)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')

  useEffect(() => {
    console.log(user)
    if(!!user.token){
      navigate('/')
    }else{
      setError('Login failed ')
    }
  }, [user])

  const login = () => {
    const params = {email, password}
    dispatch(loginAction(params))
  }

  return (
    <div>
      <br/>
      <br/>
      <Card>
        <Card.Body>
          <h5>Login</h5>
          <br />
          {error.length !== 0 &&  <Alert variant="danger">{error}</Alert> }
          <br />
          <Form>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" onChange={e => setEmail(e.target.value)}/>
                <br/>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
          </Form>
          <br/>
          <Button onClick={e => login()}>Login</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default LoginComponent