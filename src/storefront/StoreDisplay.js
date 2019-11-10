import React, {Component} from 'react';
import '../storefront/StoreDisplay.css';

class StoreDisplay extends Component {

  render(){
    return(
      <div className="items-display">
        <p>{this.props.itemsInStock.name}</p> 
        <img className='icons' src={this.props.plus} alt="plus" onClick={this.props.increase} id={this.props.itemsInStock.id} />
        <img className="icons" src={this.props.minus} alt="minus" onClick={this.props.decrease} id={this.props.itemsInStock.id} />
      </div>
    )
      
}
}

export default StoreDisplay;
