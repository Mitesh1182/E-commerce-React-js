import React from 'react';
import './Navbar.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Assets/cartlogo.svg'
import { Link } from 'react-router-dom';

const NavbarSite = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#" style={{fontSize: "32px"}} className='Logo-edit'><Link to='/' style={{textDecoration:'none', color:'black'}}>Light Studio</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="nav-category me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px',fontWeight:'400'}}
                        navbarScroll >
                        <Nav.Link href="#action1"style={{color:"black"}} ><Link to='/' style={{textDecoration:'none',color:'black'}}>Shop</Link>  </Nav.Link>
                        <Nav.Link href="#action2" style={{color:"black"}}><Link to='/mens' style={{textDecoration:'none',color:'black'}}> Men</Link></Nav.Link>
                        <Nav.Link href="#action3" style={{color:"black"}}><Link to='/womens' style={{textDecoration:'none',color:'black'}}>Woman</Link> </Nav.Link>
                        <Nav.Link href="#action4" style={{color:"black"}}><Link to='/Kids' style={{textDecoration:'none',color:'black'}}> Kids</Link></Nav.Link>
                       
                    </Nav>
                    <Form className="d-flex cart">
                     <Link to='/LoginSignUp'><Button  style={{padding: "6px 30px"}} className="nav-button" variant="outline-success" >Login</Button></Link>   
                       <Link to='/cart'><img  className='cart-edit'  src={Logo} alt=''/></Link> 
                        <p className='Count-item'>0</p>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavbarSite