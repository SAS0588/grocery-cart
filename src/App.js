import React, {Component} from 'react';
import './App.css';
import plus from './images/plus.png';
import minus from'./images/minus.png';
import StoreDisplay from './storefront/StoreDisplay.js'
import data from './data/inventory.json';
import Checkout from './cashier/Checkout'
import ShoppingCart from './ShoppingCart/ShoppingCart';


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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      store: data.inventory,
      itemsBought:[],
      subtotal: '0.00',
      tax:'0.00',
      total:'0.00'
    }
  }

  increaseClickHandler = (e) => {
    const tempItem = {...this.state.store.find((thing) => e.target.id === thing.id)};
    const tempShoppingCart = [...this.state.itemsBought];
    let quantity = 1;
    tempShoppingCart.forEach(item => {
      if (item.id === tempItem.id){
        quantity++
      }
    });
    const tempItemBought = {id: tempItem.id, name: tempItem.name, quantity: quantity, price: tempItem.price};
    tempShoppingCart.push(tempItemBought);
    console.log(tempShoppingCart);
    this.setState(() => ({itemsBought: tempShoppingCart}));
  }

  decreaseClickHandler = (e) => {
    const tempItem = {...this.state.store.find((thing) => {
      return e.target.id === thing.id;
    })};
    const tempShoppingCart = [...this.state.itemsBought];
    const indexOfDeletedItem = tempShoppingCart.findIndex(item => item.id === tempItem.id);
    console.log(indexOfDeletedItem);
    if (indexOfDeletedItem !== -1){
      tempShoppingCart.splice(indexOfDeletedItem,1);
      console.log(tempShoppingCart);
      this.setState(() => ({itemsBought: tempShoppingCart}));
    }
    
    //this.setState(()=> ({itemsBought: removedItemShoppingCart}));

    /*
      Item that was clicked on: id=1, name=apple
      Items in shopping cart: {id=2, name=banana},{id=a, name=apple}
      
      when item is clicked on,
      get the id of the item and match it to the id in the shopping cart, and return an array that omits that item.
    */
    
    // splice(index of where to add/remove items, number of items removed, new item added to array)
  }

  render(){
    return(
      <div>
        {this.state.store.map((item,index) => {
          return <StoreDisplay key={index}itemsInStock={item} plus={plus} minus={minus} increase={this.increaseClickHandler} decrease={this.decreaseClickHandler}/>
        })}
        <ShoppingCart items={this.state.itemsBought} />
        <Checkout sub={this.state.subtotal} t={this.state.tax} tot={this.state.total} />
      </div>
    )
      
}
}

export default App;
