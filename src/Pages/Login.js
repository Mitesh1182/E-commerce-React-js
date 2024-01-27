import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../Pages/Product.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      // console.log("Proceed");
    }
   axios.post('https://real-pear-fly-kilt.cyclic.app',{
    email : email,
    password: password
   })
  .then((response) => {
      if (Object.keys(response).length === 0) {
        alert("Please enter Valid email")
        localStorage.setItem("userInfo",JSON.stringify(response.email, response.password));
      } else {
        if (response.password === password) {
          alert("Login succesfully")
          navigate("/App")
        } else {
          alert("Please enter Valid password")
        }
      }
    }).catch((err) => {
      alert("Login Failed:" + err.message)
    })
  }

  const validate = () => {
    let result = true;
    if (email === "" || email === null) {
      result = false;
      alert("Please Enter Your email")
    }
    if (password === "" || password === null) {
      result = false;
      alert("Please Enter Your password")
    }
    return result;

  }
  return (
    <div className='Login-div-edit'>
      <Form onSubmit={ProceedLogin}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>email</Form.Label>
          <Form.Control value={email} onChange={e => setEmail(e.target.value)} type="Email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>
        <Button variant='white' className="btn btn-outline-dark" type="submit">
          Login
        </Button>
        <Link to="/SignUp" style={{ textDecoration: 'none', margin: '0px 16px 0px 0px' }}><Button variant='white' className="btn btn-outline-dark" type="submit">
          New User
        </Button></Link>
      </Form>
    </div>

  )
}

export default Login  