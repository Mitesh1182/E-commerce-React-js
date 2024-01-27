import React ,{ useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../Pages/Product.css';


const SignUp = () => {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [name, setName]=useState("");

const haldleSubmit = (e)=>{
  e.preventDefault();
  let result = {email,password,name}
  console.log(result)
  fetch("http://localhost:4000/accounts/register",{
    method:"POST",
    headers:{'content-type':'application/json'},
    body: JSON.stringify(result)
  })
  .then((res)=>{
    alert('Regitrated succesfully');
    console.log(res);

  }).catch((error)=>{
    alert('Failed:' +error);
  })
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
