import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../Redux/Action';
import '../Pages/Product.css'
import Container from 'react-bootstrap/esm/Container';
import Loader from 'react-loaders'
import '../Redux/spinner.css';

const ProductList = () => {
  let loader = <Loader type="pacman" />

  const dispatch = useDispatch();
  const { Product, isLoading, error } = useSelector((state) => state)

  console.log(Product)
  console.log(isLoading)
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <Container>

    <div>
      {isLoading && <div>{loader}</div>}
      {error && <div>{error}</div>}
      {Product && (
        <ul className='col-sm-4'>
          {
            Product.map((v) => {
              return(
                
                <Card style={{ width: '18rem', padding: ' 18px 33px' }}>
                <Card.Img variant="top" style={{width: '170px', height: '230px'}} src={v.image} />
                <Card.Body>
                  <Card.Title>{v.title}</Card.Title>
                  <Card.Title>{v.price}</Card.Title>
                  {/* <Card.Text>{v.description}</Card.Text> */}
                  <Button variant="primary">Add to Cart</Button>
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