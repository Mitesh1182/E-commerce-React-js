import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../Redux/Action';
import '../Pages/Product.css'
import Container from 'react-bootstrap/esm/Container';
import '../Redux/spinner.css';
import { Link } from 'react-router-dom';
import ProductDisplay from '../Componant/ProductDisplay/ProductDisplay';

const ProductList = () => {

  const dispatch = useDispatch();
  const { Product, isLoading, error } = useSelector((state) => state)
  
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  return (
    <Container >
      

      <div className='fulldiv-Edit'>
        {isLoading && <div>Loading</div>}
        {error && <div>{error}</div>}
        {Product && (
          <ul className='col-sm-4'>
            {
              Product.map((v) => {
                return (
                  <Card className='card-edit' id={v.id}>
                    <Link to={'/ProductDisplay'}><Card.Img variant="top" style={{ width: '90%', height: '330px' }} src={v.image} /></Link>
                    <Card.Body className='card-body-edit' style={{bordercolor: '#80acac'}}>
                      <Card.Title style={{color:'#3f3d3d'}}>{v.title}</Card.Title>
                      <Card.Title className='Price-card-edit'>$. {v.price}</Card.Title>
                      {/* <Card.Text>{v.description}</Card.Text> */}
                      <Button variant='unset' ><span className='card-button-edit'> Add to Cart</span></Button>
                    </Card.Body>
                  </Card>
      
                )

              })
            }
          </ul>
        )}
      </div>
      
    </Container>
  );
}

export default ProductList; 