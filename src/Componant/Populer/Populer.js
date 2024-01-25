import React from 'react'
import '../Populer/Populer.css';
import ProductList from '../../Pages/Product';
import MenSlide from '../SliderforPages/MenSlide';
import '../Populer/Populer.css';

const Populer = () => {

    return (
        <>
        <MenSlide/>
        <h2 className='Heading-edit'>
         Men Product's
      </h2>
         <hr/>

        <ProductList/>
        </>
    )
}

export default Populer;