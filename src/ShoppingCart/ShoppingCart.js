import React from 'react';
import './ShoppingCart.css'


const ShoppingCart = props => (
  <div className='ShoppingCartReceipt'>
    <h1>Shopping Cart</h1>
      {props.items.map((item,index) => {
        return(
          <p key={index}>{item.name} <span> x {item.quantity} @ {item.price}</span></p>
        )
      })}
  </div>
);

export default ShoppingCart;
