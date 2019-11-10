import React, {Component} from 'react';
import './ShoppingCart.css'


class ShoppingCart extends Component {
  
  render(){
    //console.log(this.props.items);
    return(
      <div className='ShoppingCartReceipt'>
        <h1>Shopping Cart</h1>
        {this.props.items.map((item,index) => {
            return(
            <p key={index}>{item.name} <span> x {item.quantity}</span></p>
            )
        })}
      </div>
    )
      
}
}

export default ShoppingCart;
