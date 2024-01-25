import React from 'react';
import './Navbar.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Assets/cartlogo.svg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavbarSite = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#" style={{ fontSize: "32px" }} className='Logo-edit'><Link to='/' style={{ textDecoration: 'none', color: 'black' }}>Light Studio</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="nav-category me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px', fontWeight: '400' }}
                        navbarScroll >
                        <Nav.Link href="#action1" style={{ color: "black" }} ><Link to='/' style={{ textDecoration: 'none', color: 'black' }}>Home</Link>  </Nav.Link>
                        <Nav.Link href="#action2" style={{ color: "black" }}><Link to='/mens' style={{ textDecoration: 'none', color: 'black' }}> Men</Link></Nav.Link>
                        <Nav.Link href="#action3" style={{ color: "black" }}><Link to='/Womanproduct' style={{ textDecoration: 'none', color: 'black' }}>Woman</Link> </Nav.Link>
                        <Nav.Link href="#action4" style={{ color: "black" }}><Link to='/KidsProduct' style={{ textDecoration: 'none', color: 'black' }}> Kids</Link></Nav.Link>

                    </Nav>
                    <Form className="d-flex cart">
                        <Link to='/LoginSignUp'><Button style={{ padding: "6px 30px" }} className="nav-button" variant="outline-success" >Login</Button></Link>
                        <Link onClick={handleShow}><img className='cart-edit' src={Logo} alt='' /></Link>
                        <p className='Count-item'>0</p>
                        <Offcanvas show={show} onHide={handleClose}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Cart</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                              {/* offcanvas start  */}

                              

                              {/* offcanvas end */}
                            </Offcanvas.Body>
                        </Offcanvas>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavbarSite