import React from 'react'
import ProductList from './Product'
import Hero from '../Componant/Hero/HEro'
import Populer from '../Componant/Populer/Populer'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <h2>
         Trending Product
         <hr/>
      </h2>
      <ProductList/>
      </div>
  )
}
export default Shop
