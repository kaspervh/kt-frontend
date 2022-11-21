import React, {useState} from 'react';
import { Card, Form,  Alert, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {useNavigate} from 'react-router-dom'

import { signupUser } from '../acions/UsersAction';

function SignupComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('')

  const signup = () => {
    if(email.length !== 0, password.length !== 0){
      if(password === passwordConfirmation){
        dispatch(signupUser({user: {email, password}}))
        navigate('/login')
      }else{
        setError('Passwords dont match')
        setTimeout(() =>{
          setError('')
        }, 5000)
      }
    }else{
      setError('Email or password is wrong')
      setTimeout(() =>{
        setError('')
      }, 5000)
    }
  }

  return (
    <div>
      <br />
      <br />
      <Card>
        <Card.Body>
          <h5>Sugn up</h5>
          <br />
          <Alert variant="warning">
            <p>Don't use your bank password, i did not spend much time on login</p>
          </Alert>
          {error.length !== 0 && <Alert variant="danger">{error}</Alert>}
          <br />
          <Form>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder="myEmail@example.com" onChange={e => setEmail(e.target.value)}/>
              <br />
              <Form.Label>Password</Form.Label>
              <Form.Control type='password' onChange={e => setPassword(e.target.value)}/>
              <br />
              <Form.Label>Confirm password</Form.Label>
              <Form.Control type='password' onChange={e => setPasswordConfirmation(e.target.value)}/>
            </Form.Group>
          </Form>
          <br/>
          <Button onClick={e => signup()}>Signup user</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SignupComponent