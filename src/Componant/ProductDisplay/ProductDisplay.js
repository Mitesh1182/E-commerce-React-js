import React from 'react'
import '../ProductDisplay/ProductDisplay.css';
import star from '../Assets/star1.png';
import dull_star from '../Assets/dul.png';

const ProductDisplay = (props) => {
    return (
      
        <div>
            <div className='product_display'>
                <div className='Product_Left'>

                    <div className='product-img-List'>
                        <img src={props.image}/>
                        <img src={props.image}/>
                        <img src={props.image}/>
                        <img src={props.image} />
                    </div>

                    {/* <div className='productdisplay_img'>
                        <img className='product-main-img' src={product.image} alt='' />
                    </div> */}

                </div>
            </div>
            {/* <div className='Product_Right'>
                <h1>{product.title}</h1>
                <div>
                    <img src={star} alt=''/>
                    <img src={star} alt=''/>
                    <img src={star} alt=''/>
                    <img src={star} alt=''/>
                    <img src={star} alt=''/>
                    <p>122</p>
                </div>
                <h3>$ {product.price}</h3>
                
            </div> */}
        </div>
    )
}

export default ProductDisplay