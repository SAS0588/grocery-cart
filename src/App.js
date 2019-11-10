import React, { Component } from 'react';
import './App.css';
import plus from './images/plus.png';
import minus from './images/minus.png';
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
      itemsBought: [],
      subtotal: '0.00',
      tax: '0.00',
      total: '0.00'
    }
  }

  increaseClickHandler = (e) => {
    const tempItem = { ...this.state.store.find((thing) => e.target.id === thing.id) }; //item that's clicked on
    const tempShoppingCart = [...this.state.itemsBought]; //what's in the shopping cart
    //let quantity = 0; //set quantity to 1
    let tempItemBought;

    // Check to see if this item has already been added.
    const indexOfPreviouslyAddedItem = tempShoppingCart.findIndex(item => item.id === tempItem.id); // find index of item in shopping cart. if true returns index, if false returns -1;
    console.log(indexOfPreviouslyAddedItem);
    if (indexOfPreviouslyAddedItem != -1){ // if item is found
      // increase quantity value
      console.log(tempShoppingCart[indexOfPreviouslyAddedItem].quantity++);
      tempItemBought = {id: tempItem.id, name: tempItem.name, quantity: tempShoppingCart[indexOfPreviouslyAddedItem].quantity++, price: tempItem.price}; // create object
      tempShoppingCart.splice(indexOfPreviouslyAddedItem,1,tempItemBought); // remove previous object and replace it with the new object
    } else {
      tempItemBought = {id: tempItem.id, name: tempItem.name, quantity: 1, price: tempItem.price}; // create object
    }
    /* tempShoppingCart.forEach(itemQuantity => {
      if (itemQuantity.id === tempItem.id){
        quantity++
      }
    }); */
    console.log(tempItemBought);
    console.log(tempShoppingCart);
    tempShoppingCart.push(tempItemBought);
    this.setState(() => ({ itemsBought: tempShoppingCart }));
    /* if (tempShoppingCart.length !== 0) {
      tempItemBought = tempShoppingCart.reduce((acc, currentValue) => {
        if (currentValue.id === tempItem.id) {
          acc = { id: tempItem.id, name: tempItem.name, quantity: (currentValue.quantity + 1), price: tempItem.price };
          console.log('duplicate item: ' + acc);
          return acc;
        } else {
          acc = { id: tempItem.id, name: tempItem.name, quantity: 1, price: tempItem.price }
          console.log('first item: ' + acc);
          return acc;
        }
      }, [])
    } else {
      tempItemBought = { id: tempItem.id, name: tempItem.name, quantity: 1, price: tempItem.price };
    }
    // else if statement for shopping cart is empty
    console.log(tempItemBought);
    tempShoppingCart.push(tempItemBought);
    this.setState(() => ({ itemsBought: tempShoppingCart })); */


    /*
    

    tempShoppingCart.push(tempItemBought);
    console.log(tempShoppingCart);
    this.setState(() => ({itemsBought: tempShoppingCart}));
    */
  }

  decreaseClickHandler = (e) => {
    const tempItem = {
      ...this.state.store.find((thing) => {
        return e.target.id === thing.id;
      })
    };
    const tempShoppingCart = [...this.state.itemsBought];
    const indexOfDeletedItem = tempShoppingCart.findIndex(item => item.id === tempItem.id);
    console.log(indexOfDeletedItem);
    if (indexOfDeletedItem !== -1) {
      tempShoppingCart.splice(indexOfDeletedItem, 1);
      console.log(tempShoppingCart);
      this.setState(() => ({ itemsBought: tempShoppingCart }));
    }
  }

  render() {
    return (
      <div>
        {this.state.store.map((item, index) => {
          return <StoreDisplay key={index} itemsInStock={item} plus={plus} minus={minus} increase={this.increaseClickHandler} decrease={this.decreaseClickHandler} />
        })}
        <ShoppingCart items={this.state.itemsBought} />
        <Checkout sub={this.state.subtotal} t={this.state.tax} tot={this.state.total} />
      </div>
    )

  }
}

export default App;
