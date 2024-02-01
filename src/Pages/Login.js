import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../Pages/Product.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailData = email;
  const passwordData = password;
  const navigate = useNavigate();

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (localStorage.getItem('email') === emailData, localStorage.getItem('password') === passwordData) {
      toast.success("Registation Sucessfully")
      navigate("/");
    } else {
      toast.error("Please Enter Valid Email and Password")
    }
    validate();


  }

  const validate = () => {
    let result = true;
    if (email === "" || email === null) {
      result = false;
      toast.error("Please Enter Your email")
      // alert("Please Enter Your email")
    }
    if (password === "" || password === null) {
      result = false;
      toast.error("Please Enter Your password")
      // alert("Please Enter Your password")
    }
    return result;

  }
  return (
    <div>
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
    </div>
  )
}

export default Login  