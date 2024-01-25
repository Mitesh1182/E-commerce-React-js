import React from 'react'
import ProductList from './Product'
import WomenSlide from '../Componant/SliderforPages/WomenSlide'
import '../Pages/Product.css';


const Womanproduct = () => {
  return (
    <div>
      <WomenSlide/>
      <h2 className='heading-edit'>
         Women Product
      </h2>
         <hr/>
    <ProductList/>
  </div>
  )
}

export default Womanproduct