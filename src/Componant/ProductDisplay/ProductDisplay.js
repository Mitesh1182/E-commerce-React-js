import React, { useEffect, useState } from 'react'
import '../ProductDisplay/ProductDisplay.css';
import star from '../Assets/star1.png';
import { useDispatch } from 'react-redux';
import { fetchProduct } from '../../Redux/Action';

const ProductDisplay = () => {
    const dispatch = useDispatch();
    const [productList, setProductList]=useState();

    const getProductData =()=>{
        setProductList({...productList})
    }

    const ProductData = ()=>{
        dispatch(fetchProduct(productList));
    }
    return (
        <>
        
        {
            productList.map((value)=>{
                return (
                    <div>
                    <div className='product_display'>
                        <div className='Product_Left'>
                            <p>{value.id}</p>
        
                            <div className='product-img-List'>
                                <img src={value.image} />
                                <img src={value.image} />
                                <img src={value.image} />
                                <img src={value.image} />
                            </div>
        
                            <div className='productdisplay_img'>
                                <img className='product-main-img' src={value.image} alt='' />
                            </div>
        
                        </div>
                    </div>
                    <div className='Product_Right'>
                        <h1>{value.title}</h1>
                        <div>
                            <img src={star} alt='' />
                            <img src={star} alt='' />
                            <img src={star} alt='' />
                            <img src={star} alt='' />
                            <img src={star} alt='' />
                            <p>122</p>
                        </div>
                        <h3>$ {value.price}</h3>
                        <br />
                        <p>{value.description}</p>
        
                    </div>
                </div>

                )
            })
        }
         </>

    )

}

export default ProductDisplay