import React from 'react'
import ProductList from './Product'
import Hero from '../Componant/Hero/HEro'
import Populer from '../Componant/Populer/Populer'
import '../Pages/Product.css';


const Shop = () => {
  return (
    <div>
      <Hero/>
      <h2 className='heading-edit'>
         Trending Product
      </h2>
         <hr/>
      <ProductList/>
      </div>
  )
}
export default Shop
