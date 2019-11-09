import React, {Component} from 'react';
import '../storefront/StoreDisplay.css';
/*
Hey Saad! I was thinking it would be good to drive home the react stuff, so if you want, building a shopping cart would be a good exercise. Then after you build it, we can add in an api. Heres some requirements to work with:
* add an item
* remove an item
* update quantity
* display subtotal
* display tax
* display total (with tax)

Everything else is up to however you want to implement it
I’d suggest setting up a JSON file with your “inventory”, with just a few items and any other properties those items would need
*/






class StoreDisplay extends Component {
  

  render(){
    return(
      <div className="items-display" id={this.props.itemsInStock.key}>
        <p>{this.props.itemsInStock.name}</p> 
        <img className='icons' src={this.props.plus} alt="plus" onClick={this.props.increase} id={this.props.itemsInStock.id} />
        <img className="icons" src={this.props.minus} alt="minus" onClick={this.props.decrease} id={this.props.itemsInStock.id} />
      </div>
    )
      
}
}

export default StoreDisplay;
