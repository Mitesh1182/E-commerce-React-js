import React ,{ useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../Pages/Product.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [name, setName]=useState("");
  const navigate = useNavigate();
const haldleSubmit = (e)=>{
  e.preventDefault();
  // localStorage.setItem('email', email);
  // localStorage.setItem('password', password);
  validate();
  
  if(localStorage.setItem('email', email) ,localStorage.setItem('password', password) === email, password){
    
    navigate("/Login")
  }else{
  }
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
  if (name === "" || name === null) {
    result = false;
    toast.error("Please Enter Your name")
    // alert("Please Enter Your password")
  }
  return result;

}
  
  return (
    
    <div className='Singup-page-edit'>
      
      <Form onSubmit={haldleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>UserName</Form.Label>
        <Form.Control value={name} onChange={e=>setName(e.target.value)} placeholder="1234 Main St" />
      </Form.Group>

      <Button variant='white' onClick={haldleSubmit} className='btn btn-outline-dark' type="submit">
        Singin
      </Button>
     
    </Form>

    </div>
  )
}

export default SignUp;
