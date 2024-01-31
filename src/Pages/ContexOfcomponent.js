import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Componant/ProductDisplay/ProductDisplay';
import ProductList from './Product';
import store from '../Redux/Store';

const ContexOfcomponent = () => {
  const {all_products}=useContext(store);
  const {productId} = useParams();
  const product = all_products.find((e)=>e.id === Number(productId))
  return (
    <div>
      

    </div>
  )
}

export default ContexOfcomponent