import React from 'react'
import ProductList from './Product'
import KidsSlide from '../Componant/SliderforPages/KidsSlide'
import '../Pages/Product.css';

const KidsProduct = () => {
  return (
    <div>
      <KidsSlide/>
      <h2 className='heading-edit'>
         Kid Product's
      </h2>
         <hr/>
      <ProductList/>
    </div>
  )
}

export default KidsProduct