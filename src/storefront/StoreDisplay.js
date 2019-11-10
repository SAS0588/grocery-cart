import React, {Component} from 'react';
import '../storefront/StoreDisplay.css';

const StoreDisplay = props => (
  <div className="items-display">
    <p>{props.itemsInStock.name}</p> 
    <img className='icons' src={props.plus} alt="plus" onClick={props.increase} id={props.itemsInStock.id} />
    <img className="icons" src={props.minus} alt="minus" onClick={props.decrease} id={props.itemsInStock.id} />
</div>
)


export default StoreDisplay;
