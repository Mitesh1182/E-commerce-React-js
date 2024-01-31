import React from 'react'



// export const getDefaultCart =()=>{
//   let cart= {};
//   for (let index = 0; index < Product.length; index++) {
//    cart[index]=0;
    
//   }
// }

const Cart = ({props}) => {
  let cartData = props;
  console.log(cartData);

  return (
    <div>Cart</div>
  )
}

export default Cart;